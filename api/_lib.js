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
/* One name per page: "/", "/index", "/index.html" are the home; ".html" and a trailing slash are dropped. */
function normalizePath(path){
  const p=String(path).replace(/\.html$/,'').replace(/\/index$/,'').replace(/(.)\/$/,'$1');
  return p===''?'/':p;
}
/* Where a visit comes from, as a short name: the utm_source of the link, else the referring site's host. */
const SOURCES=[[/linkedin|lnkd\.in/,'LinkedIn'],[/(^|\.)google\./,'Google'],[/(^|\.)(t\.co|twitter\.com|x\.com)$/,'X'],[/facebook|(^|\.)fb\.com$|(^|\.)l\.instagram\.com$|instagram/,'Facebook e Instagram'],[/whatsapp|wa\.me/,'WhatsApp'],[/bing\.com|duckduckgo|ecosia|brave\.com/,'Altri motori di ricerca']];
function sourceName(src,ref){
  const raw=(typeof src==='string'&&/^[a-zA-Z0-9_.-]{1,40}$/.test(src)?src:typeof ref==='string'&&/^[a-zA-Z0-9.-]{1,100}$/.test(ref)?ref:'').toLowerCase().replace(/^www\./,'');
  if(!raw||raw==='nforcolin.eu')return 'Diretto o non indicato';
  const known=SOURCES.find(([re])=>re.test(raw));
  return known?known[1]:raw;
}
module.exports={cookie,sign,session,setCookie,redis,noStore,normalizePath,sourceName};
