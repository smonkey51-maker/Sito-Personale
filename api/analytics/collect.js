const crypto=require('node:crypto');
const {session,redis,noStore}=require('../_lib');
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='POST')return res.status(405).end();
 if(session(req))return res.status(204).end();
 if(!process.env.ANALYTICS_SECRET)return res.status(503).end();
 const origin=req.headers.origin;
 if(origin&&origin!=='https://nforcolin.eu'&&origin!=='https://www.nforcolin.eu')return res.status(403).end();
 const path=req.body?.path;
 if(typeof path!=='string'||!/^\/[a-zA-Z0-9_./-]{0,150}$/.test(path)||path.startsWith('/admin')||path.startsWith('/api/'))return res.status(400).end();
 const day=new Date().toISOString().slice(0,10);
 const ip=(req.headers['x-forwarded-for']||'').split(',')[0].trim()||req.socket?.remoteAddress||'';
 const ua=(req.headers['user-agent']||'').slice(0,250);
 const visitor=crypto.createHmac('sha256',process.env.ANALYTICS_SECRET).update(day+'|'+ip+'|'+ua).digest('hex');
 try{
  await Promise.all([
   redis(['INCR','nf:views:'+day]),
   redis(['PFADD','nf:unique:'+day,visitor]),
   redis(['HINCRBY','nf:pages:'+day,path,1]),
  ]);
  await Promise.all(['nf:views:','nf:unique:','nf:pages:'].map(prefix=>redis(['EXPIRE',prefix+day,90*86400])));
  return res.status(204).end();
 }catch(e){return res.status(503).end();}
};
