const crypto=require('node:crypto');
const {redis,noStore}=require('../_lib');
/* Richieste dal modulo di contatti.html. Restano su Redis per 12 mesi (vedi list.js). */
const KINDS=['pa','pmi','pro','altro'];
const KIND_LABEL={pa:'pubblica amministrazione',pmi:'PMI',pro:'libero professionista',altro:'altro'};
/* Inoltro su Telegram di tutta la richiesta, come testo semplice (niente formattazione,
   così il testo di chi scrive non può alterare il messaggio). Token e chat stanno nelle
   variabili d'ambiente di Vercel, mai nel codice. Telegram accetta al massimo 4096
   caratteri: il testo del messaggio si accorcia se serve. Se Telegram non risponde entro
   4 secondi la richiesta resta salvata comunque e si legge nella pagina privata. */
function telegramText(e){
 const lines=['Nuova richiesta dal modulo contatti','','Nome: '+e.name,'Email: '+e.email];
 if(e.org)lines.push('Azienda o ente: '+e.org);
 if(KIND_LABEL[e.kind])lines.push('Tipo: '+KIND_LABEL[e.kind]);
 if(e.phone)lines.push('Telefono: '+e.phone);
 lines.push('Lingua della pagina: '+e.lang.toUpperCase(),'');
 const head=lines.join('\n')+'\n',room=4000-head.length;
 return head+(e.message.length>room?e.message.slice(0,room-1)+'…':e.message);
}
async function notify(entry){
 const token=process.env.TELEGRAM_BOT_TOKEN,chat=process.env.TELEGRAM_CHAT_ID;
 if(!token||!chat)return;
 try{
  await fetch('https://api.telegram.org/bot'+token+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chat,text:telegramText(entry),disable_web_page_preview:true}),signal:AbortSignal.timeout(4000)});
 }catch(e){}
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
  // Al massimo 5 messaggi al giorno dallo stesso indirizzo.
  const count=await redis(['INCR','nf:contact:rate:'+who]);
  if(count===1)await redis(['EXPIRE','nf:contact:rate:'+who,86400]);
  if(count>5)return res.status(429).json({ok:false,errors:['rate']});
  const entry={id:crypto.randomBytes(8).toString('hex'),at:new Date().toISOString(),name,email,org,kind,phone,message,lang};
  await redis(['LPUSH','nf:contact:messages',JSON.stringify(entry)]);
  await redis(['LTRIM','nf:contact:messages',0,499]);
  await notify(entry);
  return res.status(200).json({ok:true});
 }catch(e){return res.status(503).json({ok:false,errors:['storage']});}
};
