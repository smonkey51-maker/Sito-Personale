const {noStore}=require('../_lib');
module.exports=(req,res)=>{noStore(res);if(req.method!=='POST')return res.status(405).end();res.setHeader('Set-Cookie','nf_admin=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');res.status(204).end();};
