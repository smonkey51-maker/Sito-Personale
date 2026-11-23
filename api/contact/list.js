const {session,redis,noStore}=require('../_lib');
/* Elenco dei messaggi per la pagina privata. Quelli più vecchi di 12 mesi vengono cancellati qui. */
const YEAR=365*86400*1000;
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='GET')return res.status(405).end();
 if(!session(req))return res.status(401).json({error:'Unauthorized'});
 try{
  const raw=await redis(['LRANGE','nf:contact:messages',0,-1])||[];
  const now=Date.now(),keep=[];
  for(const item of raw){
   let m;try{m=JSON.parse(item);}catch(e){m=null;}
   if(!m||now-Date.parse(m.at)>YEAR){await redis(['LREM','nf:contact:messages',0,item]);continue;}
   keep.push(m);
  }
  return res.status(200).json({messages:keep});
 }catch(e){return res.status(503).json({error:'Storage unavailable'});}
};
