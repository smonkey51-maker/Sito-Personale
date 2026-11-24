const crypto=require('node:crypto');
const https=require('node:https');
const {redis,redisPipeline,noStore}=require('../_lib');
/* Richieste dal modulo di contatti.html. Restano su Redis per 12 mesi (vedi list.js). */
const KINDS=['pa','pmi','pro','altro'];
const KIND_LABEL={pa:'pubblica amministrazione',pmi:'PMI',pro:'libero professionista',altro:'altro'};
/* Inoltro su Telegram di tutta la richiesta, come testo semplice (niente formattazione,
   così il testo di chi scrive non può alterare il messaggio). Token e chat stanno nelle
   variabili d'ambiente di Vercel, mai nel codice. Telegram accetta al massimo 4096
   caratteri: il testo del messaggio si accorcia se serve. Se Telegram non risponde entro
   5 secondi la richiesta resta salvata comunque e si legge nella pagina privata.
   L'invio avviene prima della risposta al browser: dopo la risposta Vercel sospende la
   funzione e la connessione restava appesa (ETIMEDOUT, 23 novembre 2026). */
function telegramText(e){
 const lines=['Nuova richiesta dal modulo contatti','','Nome: '+e.name,'Email: '+e.email];
 if(e.org)lines.push('Azienda o ente: '+e.org);
 if(KIND_LABEL[e.kind])lines.push('Tipo: '+KIND_LABEL[e.kind]);
 if(e.phone)lines.push('Telefono: '+e.phone);
 lines.push('Lingua della pagina: '+e.lang.toUpperCase(),'');
 const head=lines.join('\n')+'\n',room=4000-head.length;
 return head+(e.message.length>room?e.message.slice(0,room-1)+'…':e.message);
}
/* Chiamata a Telegram con node:https forzando IPv4: con fetch la connessione restava appesa
   fino al timeout (log "TimeoutError" del 23 novembre 2026), tipico di un tentativo IPv6 senza via d'uscita. */
function telegramPost(token,payload){
 return new Promise((resolve,reject)=>{
  const body=JSON.stringify(payload);
  const req=https.request({host:'api.telegram.org',path:'/bot'+token+'/sendMessage',method:'POST',family:4,timeout:5000,headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(body)}},res=>{
   let data='';res.setEncoding('utf8');res.on('data',c=>data+=c);res.on('end',()=>{let j={};try{j=JSON.parse(data);}catch(e){}resolve({status:res.statusCode,description:j.description||''});});
  });
  req.on('timeout',()=>req.destroy(Object.assign(Error('timeout'),{code:'ETIMEDOUT'})));
  req.on('error',reject);
  req.end(body);
 });
}
async function notify(entry){
 const token=process.env.TELEGRAM_BOT_TOKEN,chat=process.env.TELEGRAM_CHAT_ID;
 if(!token||!chat){console.error('contact: Telegram non configurato (manca TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID)');return;}
 const started=Date.now();
 try{
  const r=await telegramPost(token,{chat_id:chat,text:telegramText(entry),disable_web_page_preview:true});
  // Nei log finisce solo l'esito di Telegram, mai il token né i dati di chi scrive.
  if(r.status!==200)console.error('contact: Telegram ha risposto',r.status,r.description);
  else console.log('contact: inoltrato su Telegram in',Date.now()-started,'ms');
 }catch(e){console.error('contact: Telegram non raggiungibile',e.code||e.name,'dopo',Date.now()-started,'ms');}
}
const clean=(v,max)=>typeof v==='string'?v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'').trim().slice(0,max):'';
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='POST')return res.status(405).end();
 const origin=req.headers.origin;
 if(origin&&origin!=='https://nforcolin.eu'&&origin!=='https://www.nforcolin.eu')return res.status(403).end();
 const b=req.body&&typeof req.body==='object'?req.body:{};
 // Campo trappola: le persone non lo vedono, molti bot lo compilano. Si risponde "ok" senza salvare.
 if(clean(b.website,200))return res.status(200).json({ok:true});
 const name=clean(b.name,120),email=clean(b.email,200),org=clean(b.org,160),phone=clean(b.phone,40),message=clean(b.message,4000);
 const kind=KINDS.includes(b.kind)?b.kind:'';
 const lang=['it','en','zh'].includes(b.lang)?b.lang:'it';
 const errors=[];
 if(name.length<2)errors.push('name');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))errors.push('email');
 if(message.length<20)errors.push('message');
 if(phone&&!/^[+0-9 ()./-]{6,40}$/.test(phone))errors.push('phone');
 if(errors.length)return res.status(400).json({ok:false,errors});
 const ip=(req.headers['x-forwarded-for']||'').split(',')[0].trim()||req.socket?.remoteAddress||'';
 const day=new Date().toISOString().slice(0,10);
 const who=crypto.createHmac('sha256',process.env.ANALYTICS_SECRET||'nf-contact').update(day+'|'+ip).digest('hex').slice(0,32);
 try{
  // Un solo viaggio verso Redis: conta gli invii di oggi da questa rete e salva il messaggio.
  // Se il limite di 5 al giorno è superato, il messaggio appena salvato si toglie subito.
  const entry={id:crypto.randomBytes(8).toString('hex'),at:new Date().toISOString(),name,email,org,kind,phone,message,lang};
  const item=JSON.stringify(entry),rate='nf:contact:rate:'+who;
  const [count]=await redisPipeline([['INCR',rate],['EXPIRE',rate,86400],['LPUSH','nf:contact:messages',item],['LTRIM','nf:contact:messages',0,499]]);
  if(count>5){await redis(['LREM','nf:contact:messages',1,item]);return res.status(429).json({ok:false,errors:['rate']});}
  // Telegram risponde in meno di un secondo (misura da iad1): si aspetta l'inoltro e poi si risponde.
  await notify(entry);
  return res.status(200).json({ok:true});
 }catch(e){return res.status(503).json({ok:false,errors:['storage']});}
};
