const crypto=require('node:crypto');
const {setCookie,noStore}=require('../_lib');
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='GET')return res.status(405).end();
 if(!process.env.GOOGLE_CLIENT_ID||!process.env.ANALYTICS_SECRET)return res.status(503).send('Authentication not configured');
 const state=crypto.randomBytes(24).toString('hex');
 setCookie(res,'nf_oauth_state',state,600);
 const redirect='https://nforcolin.eu/api/auth/callback';
 const url=new URL('https://accounts.google.com/o/oauth2/v2/auth');
 url.searchParams.set('client_id',process.env.GOOGLE_CLIENT_ID);
 url.searchParams.set('redirect_uri',redirect);
 url.searchParams.set('response_type','code');
 url.searchParams.set('scope','openid email');
 url.searchParams.set('state',state);
 url.searchParams.set('prompt','select_account');
 return res.redirect(302,url.toString());
};
