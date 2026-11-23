/* Diagnosi temporanea della rete in uscita delle funzioni (23 novembre 2026): prova a collegarsi
   a Telegram e a Google e restituisce i tempi. Nessun segreto, nessun dato personale. Da togliere. */
const net=require('node:net'),dns=require('node:dns').promises;
const tcp=(host,family)=>new Promise(resolve=>{const t=Date.now();const s=net.connect({host,port:443,family,timeout:5000});
 s.on('connect',()=>{s.destroy();resolve({ok:true,ms:Date.now()-t,ip:s.remoteAddress});});
 s.on('timeout',()=>{s.destroy();resolve({ok:false,error:'timeout',ms:Date.now()-t});});
 s.on('error',e=>resolve({ok:false,error:e.code||e.message,ms:Date.now()-t}));});
const get=async url=>{const t=Date.now();try{const r=await fetch(url,{signal:AbortSignal.timeout(5000)});return {status:r.status,ms:Date.now()-t};}catch(e){return {error:e.name+' '+(e.cause?.code||''),ms:Date.now()-t};}};
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');
 const out={region:process.env.VERCEL_REGION||null,node:process.version};
 for(const h of ['api.telegram.org','oauth2.googleapis.com']){
  out[h]={dns4:await dns.resolve4(h).catch(e=>e.code),dns6:await dns.resolve6(h).catch(e=>e.code),tcp4:await tcp(h,4),https:await get('https://'+h+'/')};
 }
 res.status(200).json(out);
};
