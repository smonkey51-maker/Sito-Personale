/* Risponde solo se il cookie dell'admin è valido: lo usa Nicolò brain
   (servito da /brain/) per sapere se chi scrive è Nicolò, senza un secondo login. */
const {session,noStore}=require('../_lib');
module.exports=(req,res)=>{noStore(res);if(req.method!=='GET')return res.status(405).end();return res.status(session(req)?204:401).end();};
