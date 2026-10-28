const {session,redis,noStore}=require('../_lib');
module.exports=async(req,res)=>{
 noStore(res);
 if(req.method!=='GET')return res.status(405).end();
 if(!session(req))return res.status(401).json({error:'Unauthorized'});
 const days=Math.min(90,Math.max(1,Number(req.query.days)||30));
 const rows=[];
 try{
  for(let i=days-1;i>=0;i--){
   const d=new Date();d.setUTCHours(12,0,0,0);d.setUTCDate(d.getUTCDate()-i);
   const day=d.toISOString().slice(0,10);
   const [views,unique,pages]=await Promise.all([redis(['GET','nf:views:'+day]),redis(['PFCOUNT','nf:unique:'+day]),redis(['HGETALL','nf:pages:'+day])]);
   const list={};for(let j=0;j<(pages||[]).length;j+=2)list[pages[j]]=Number(pages[j+1]);
   rows.push({day,views:Number(views||0),unique:Number(unique||0),pages:list});
  }
  const totals={views:0,uniqueDaily:0,pages:{}};
  for(const row of rows){totals.views+=row.views;totals.uniqueDaily+=row.unique;for(const [p,n] of Object.entries(row.pages))totals.pages[p]=(totals.pages[p]||0)+n;}
  return res.status(200).json({days:rows,totals,note:'Unique visitors are estimated per day; summed daily uniques are not distinct visitors across the entire period.'});
 }catch(e){return res.status(503).json({error:'Analytics storage unavailable'});}
};
