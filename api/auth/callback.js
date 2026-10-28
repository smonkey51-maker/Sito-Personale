const crypto=require('node:crypto');
const {cookie,sign,setCookie,noStore}=require('../_lib');
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='GET')return res.status(405).end();
 const state=cookie(req,'nf_oauth_state');
 res.setHeader('Set-Cookie','nf_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
 if(!state||typeof req.query.state!=='string'||state.length!==req.query.state.length||!crypto.timingSafeEqual(Buffer.from(state),Buffer.from(req.query.state))||!req.query.code)return res.status(403).send('Invalid login state');
 try {
  const token=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({code:req.query.code,client_id:process.env.GOOGLE_CLIENT_ID,client_secret:process.env.GOOGLE_CLIENT_SECRET,redirect_uri:'https://nforcolin.eu/api/auth/callback',grant_type:'authorization_code'})});
  if(!token.ok)throw Error('OAuth exchange failed');
  const json=await token.json();
  const profile=await fetch('https://openidconnect.googleapis.com/v1/userinfo',{headers:{Authorization:'Bearer '+json.access_token}});
  if(!profile.ok)throw Error('Google profile failed');
  const user=await profile.json();
  if(!user.email_verified||!process.env.ADMIN_GOOGLE_EMAIL||user.email.toLowerCase()!==process.env.ADMIN_GOOGLE_EMAIL.toLowerCase())return res.status(403).send('Account not authorized');
  const expiry=String(Date.now()+7*86400000);
  setCookie(res,'nf_admin',expiry+'.'+sign(expiry),7*86400);
  return res.redirect(302,'/admin.html');
 }catch(e){return res.status(502).send('Google login failed');}
};
