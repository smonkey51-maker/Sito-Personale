const crypto = require('node:crypto');
const secret = () => process.env.ANALYTICS_SECRET;
const cookie = (req,name) => (req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(name+'='))?.slice(name.length+1);
const sign = value => crypto.createHmac('sha256',secret()).update(value).digest('hex');
function session(req) {
  if(!secret()) return false;
  const raw=cookie(req,'nf_admin'); if(!raw) return false;
  const [expiry,mac]=raw.split('.'); if(!/^\d+$/.test(expiry||'')||!mac||Number(expiry)<Date.now()) return false;
  const expected=sign(expiry);
  return mac.length===expected.length && crypto.timingSafeEqual(Buffer.from(mac),Buffer.from(expected));
}
function setCookie(res,name,value,maxAge) {
  res.setHeader('Set-Cookie',name+'='+value+'; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age='+maxAge);
}
function redis(command) {
  const url=process.env.UPSTASH_REDIS_REST_URL,token=process.env.UPSTASH_REDIS_REST_TOKEN;
  if(!url||!token) throw Error('Redis not configured');
  return fetch(url,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(command)}).then(async r=>{if(!r.ok)throw Error('Redis unavailable');const data=await r.json();if(data.error)throw Error('Redis error');return data.result});
}
function noStore(res){res.setHeader('Cache-Control','private, no-store');res.setHeader('X-Robots-Tag','noindex, nofollow');}
module.exports={cookie,sign,session,setCookie,redis,noStore};
