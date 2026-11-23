const {session,redis,noStore}=require('../_lib');
/* Cancella un messaggio dalla pagina privata (per esempio su richiesta di chi l'ha scritto). */
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='POST')return res.status(405).end();
 if(!session(req))return res.status(401).json({error:'Unauthorized'});
 const id=req.body?.id;
 if(typeof id!=='string'||!/^[a-f0-9]{16}$/.test(id))return res.status(400).end();
 try{
  const raw=await redis(['LRANGE','nf:contact:messages',0,-1])||[];
  const item=raw.find(x=>{try{return JSON.parse(x).id===id;}catch(e){return false;}});
  if(item)await redis(['LREM','nf:contact:messages',0,item]);
  return res.status(204).end();
 }catch(e){return res.status(503).end();}
};
