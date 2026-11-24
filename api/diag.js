/* Diagnosi temporanea (24 novembre 2026): chiama il bot Telegram come fa il modulo (getMe, senza
   inviare messaggi) e riporta regione e tempi. Il token non compare nella risposta. Da togliere. */
const https=require('node:https');
const call=(path,family)=>new Promise(resolve=>{const t=Date.now();
 const req=https.request({host:'api.telegram.org',path,method:'GET',family,timeout:5000},res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>{let j={};try{j=JSON.parse(d);}catch(e){}resolve({status:res.statusCode,ok:j.ok,description:j.description||'',bot:j.result&&j.result.username,ms:Date.now()-t});});});
 req.on('timeout',()=>req.destroy(Object.assign(Error('timeout'),{code:'ETIMEDOUT'})));
 req.on('error',e=>resolve({error:e.code||e.message,ms:Date.now()-t}));req.end();});
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');
 const token=process.env.TELEGRAM_BOT_TOKEN||'';
 res.status(200).json({region:process.env.VERCEL_REGION||null,vercelId:req.headers['x-vercel-id']||null,hasToken:!!token,hasChat:!!process.env.TELEGRAM_CHAT_ID,
  tokenShape:{length:token.length,trimmedLength:token.trim().length,format:/^\d{6,12}:[A-Za-z0-9_-]{30,40}$/.test(token)},
  root4:await call('/',4),fakeToken4:await call('/bot123456789:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/getMe',4),getMe4:await call('/bot'+token.trim()+'/getMe',4)});
};
