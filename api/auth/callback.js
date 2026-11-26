const crypto=require('node:crypto');
const {cookie,sign,session,noStore}=require('../_lib');
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='GET')return res.status(405).end();
 const state=cookie(req,'nf_oauth_state'),next=cookie(req,'nf_oauth_next')==='brain'?'/brain/':'/admin.html';
 res.setHeader('Set-Cookie',['nf_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0','nf_oauth_next=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0']);
 if(!state||typeof req.query.state!=='string'||state.length!==req.query.state.length||!crypto.timingSafeEqual(Buffer.from(state),Buffer.from(req.query.state))||!req.query.code){
  /* Pagina ricaricata o tornata indietro dopo un accesso riuscito: il codice è già stato usato, ma l'accesso c'è. */
  if(session(req))return res.redirect(302,next);
  return res.status(403).send('Invalid login state');
 }
 try {
  const token=await fetch('https://oauth2.googleapis.com/token',{signal:AbortSignal.timeout(8000),method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({code:req.query.code,client_id:process.env.GOOGLE_CLIENT_ID,client_secret:process.env.GOOGLE_CLIENT_SECRET,redirect_uri:'https://nforcolin.eu/api/auth/callback',grant_type:'authorization_code'})});
  if(!token.ok){
   const d=await token.json().catch(()=>({}));
   /* Il browser a volte apre l'indirizzo di ritorno due volte: la seconda trova il codice già usato. Si va avanti: se la prima ha avuto successo l'accesso c'è, altrimenti la pagina mostra di nuovo il bottone. */
   if(d.error==='invalid_grant'){console.error('auth: codice Google già usato, si prosegue');return res.redirect(302,next);}
   throw Error('scambio del codice rifiutato da Google: '+token.status+' '+(d.error||''));
  }
  const json=await token.json();
  const profile=await fetch('https://openidconnect.googleapis.com/v1/userinfo',{signal:AbortSignal.timeout(8000),headers:{Authorization:'Bearer '+json.access_token}});
  if(!profile.ok)throw Error('profilo Google non disponibile: '+profile.status);
  const user=await profile.json();
  const allowed=(process.env.ADMIN_GOOGLE_EMAIL||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
  if(!user.email_verified||!allowed.includes(String(user.email||'').toLowerCase())){
   // Nel log solo il motivo, non l'indirizzo: così si capisce se la variabile è vuota o diversa.
   console.error('auth: accesso negato',!allowed.length?'(ADMIN_GOOGLE_EMAIL vuota)':!user.email_verified?'(email non verificata)':'(account diverso da ADMIN_GOOGLE_EMAIL)');
   return res.status(403).send('Account not authorized');
  }
  const expiry=String(Date.now()+7*86400000);
  res.appendHeader('Set-Cookie','nf_admin='+expiry+'.'+sign(expiry)+'; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age='+7*86400);
  return res.redirect(302,next);
 }catch(e){console.error('auth: login Google fallito',e.message);return res.status(502).send('Google login failed');}
};
