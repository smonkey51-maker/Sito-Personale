const $=id=>document.getElementById(id);
const SVG='http://www.w3.org/2000/svg';
const num=n=>Math.round(n).toLocaleString('it-IT');
const dateOf=day=>new Date(day+'T12:00:00Z');
const fmt=(day,opts)=>dateOf(day).toLocaleDateString('it-IT',{timeZone:'UTC',...opts});
const el=(name,attrs={},text)=>{const node=document.createElementNS(SVG,name);for(const [k,v] of Object.entries(attrs))node.setAttribute(k,v);if(text!==undefined)node.textContent=text;return node;};
let days=30,data=null,active=-1;

// Scala dell'asse Y con passi "tondi" (1, 2, 5 per potenze di dieci).
function niceMax(max){if(max<=4)return 4;const step=10**Math.floor(Math.log10(max/4));for(const m of [1,2,5,10])if(m*step*4>=max)return m*step*4;return max;}

function drawTrend(){
 const box=$('chart'),rows=data.days;
 box.querySelector('svg')?.remove();
 const w=box.clientWidth-24,h=box.clientHeight-28,left=40,bottom=28,top=4;
 const max=niceMax(Math.max(...rows.map(r=>Math.max(r.views,r.unique))));
 const x=i=>left+(rows.length===1?0:i*(w-left)/(rows.length-1));
 const y=v=>top+(h-bottom-top)*(1-v/max);
 const svg=el('svg',{viewBox:`0 0 ${w} ${h}`,'aria-hidden':'true'});
 for(let t=0;t<=4;t++){const v=max*t/4;svg.append(el('line',{class:'grid',x1:left,x2:w,y1:y(v),y2:y(v)}),el('text',{x:left-10,y:y(v)+4,'text-anchor':'end'},num(v)));}
 const labels=rows.length<=7&&w>=480?rows.length:Math.min(rows.length,w<480?3:6);
 for(let k=0;k<labels;k++){const i=Math.round(k*(rows.length-1)/Math.max(1,labels-1));svg.append(el('text',{x:x(i),y:h-6,'text-anchor':k===0?'start':k===labels-1?'end':'middle'},fmt(rows[i].day,{day:'numeric',month:'short'})));}
 const line=key=>rows.map((r,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(r[key]).toFixed(1)).join('');
 svg.append(el('path',{class:'area',d:line('views')+`L${x(rows.length-1)} ${y(0)}L${x(0)} ${y(0)}Z`}),el('path',{class:'unique',d:line('unique')}),el('path',{class:'views',d:line('views')}));
 const cursor=el('line',{class:'cursor',y1:top,y2:y(0),visibility:'hidden'}),dot=el('circle',{class:'dot',r:4,visibility:'hidden'});
 svg.append(cursor,dot);box.prepend(svg);
 box.setAttribute('aria-label',`Grafico delle visualizzazioni giornaliere: ${num(data.totals.views)} in ${rows.length} giorni.`);
 const show=i=>{
  active=i;const tip=$('tip');
  if(i<0){tip.hidden=true;cursor.setAttribute('visibility','hidden');dot.setAttribute('visibility','hidden');return;}
  const r=rows[i];
  cursor.setAttribute('x1',x(i));cursor.setAttribute('x2',x(i));cursor.setAttribute('visibility','visible');
  dot.setAttribute('cx',x(i));dot.setAttribute('cy',y(r.views));dot.setAttribute('visibility','visible');
  const b=document.createElement('b');b.textContent=fmt(r.day,{weekday:'short',day:'numeric',month:'long'});
  const row=(label,v)=>{const s=document.createElement('span'),e=document.createElement('em');s.textContent=label;e.textContent=num(v);s.append(e);return s;};
  tip.replaceChildren(b,row('Visualizzazioni',r.views),row('Unici stimati',r.unique));tip.hidden=false;
  const px=x(i)+8,tw=tip.offsetWidth;let pos=px+12;if(pos+tw>box.clientWidth-8)pos=px-tw-12;
  tip.style.transform=`translateX(${Math.max(8,pos)}px)`;
 };
 const pick=e=>{const r=box.getBoundingClientRect(),px=(e.clientX-r.left-8)*w/(r.width-24);show(Math.max(0,Math.min(rows.length-1,Math.round((px-left)/((w-left)/Math.max(1,rows.length-1))))));};
 box.onpointermove=pick;box.onpointerdown=pick;box.onpointerleave=()=>show(-1);box.onblur=()=>show(-1);
 box.onkeydown=e=>{const step={ArrowRight:1,ArrowLeft:-1}[e.key];if(e.key==='Home'||e.key==='End'){e.preventDefault();show(e.key==='Home'?0:rows.length-1);}else if(step){e.preventDefault();show(Math.max(0,Math.min(rows.length-1,(active<0?rows.length-1:active+step))));}else if(e.key==='Escape')show(-1);};
 if(active>=rows.length)active=-1;if(active>=0)show(active);
}

function drawPages(){
 const pages=Object.entries(data.totals.pages).sort((a,b)=>b[1]-a[1]).slice(0,8);
 const top=pages[0]?.[1]||1,total=data.totals.views||1;
 $('pages-empty').hidden=pages.length>0;
 $('pages').replaceChildren(...pages.map(([path,n])=>{
  const li=document.createElement('li'),name=document.createElement('span'),count=document.createElement('span'),track=document.createElement('span'),fill=document.createElement('span');
  name.className='name';name.textContent=path==='/'?'Home':path.replace(/^\//,'').replace(/\.html$/,'');name.title=path;
  count.className='count';count.textContent=`${num(n)} (${Math.round(n/total*100)}%)`;
  track.className='track';fill.className='fill';fill.style.transform=`scaleX(${n/top})`;track.append(fill);
  li.append(name,count,track);return li;
 }));
}

function drawWeek(){
 const box=$('week'),names=['lun','mar','mer','gio','ven','sab','dom'],sum=Array(7).fill(0),count=Array(7).fill(0);
 for(const r of data.days){const d=(dateOf(r.day).getUTCDay()+6)%7;sum[d]+=r.views;count[d]++;}
 const avg=sum.map((s,i)=>count[i]?s/count[i]:0),max=Math.max(...avg),w=box.clientWidth,h=box.clientHeight,bottom=28,top=24,gap=w/7;
 const svg=el('svg',{viewBox:`0 0 ${w} ${h}`,role:'img','aria-label':'Media delle visualizzazioni per giorno della settimana: '+names.map((n,i)=>`${n} ${avg[i].toLocaleString('it-IT',{maximumFractionDigits:1})}`).join(', ')});
 avg.forEach((v,i)=>{
  const bh=max?Math.max(2,(h-bottom-top)*v/max):2,bw=Math.min(36,gap*.6),cx=gap*i+gap/2;
  svg.append(el('rect',{x:cx-bw/2,y:h-bottom-bh,width:bw,height:bh,class:max&&v===max?'is-top':''}),
   el('text',{x:cx,y:h-bottom-bh-8,'text-anchor':'middle',class:'value'},v.toLocaleString('it-IT',{maximumFractionDigits:1})),
   el('text',{x:cx,y:h-6,'text-anchor':'middle'},names[i]));
 });
 box.replaceChildren(svg);
}

function render(){
 const rows=data.days,t=data.totals;
 $('views').textContent=num(t.views);
 $('range').textContent=rows.length?`dal ${fmt(rows[0].day,{day:'numeric',month:'long'})} al ${fmt(rows[rows.length-1].day,{day:'numeric',month:'long'})}`:'';
 $('unique').textContent=num(t.uniqueDaily);
 $('average').textContent=(t.views/Math.max(1,rows.length)).toLocaleString('it-IT',{maximumFractionDigits:1});
 const peak=rows.reduce((a,b)=>b.views>a.views?b:a,rows[0]);
 $('peak').textContent=peak&&peak.views?`${fmt(peak.day,{day:'numeric',month:'short'})}, ${num(peak.views)}`:'Nessuna visita';
 $('days').replaceChildren(...rows.slice().reverse().map(r=>{const tr=document.createElement('tr');for(const v of [fmt(r.day,{weekday:'short',day:'numeric',month:'short',year:'numeric'}),num(r.views),num(r.unique)]){const td=document.createElement('td');td.textContent=v;tr.append(td);}return tr;}));
 drawTrend();drawPages();drawWeek();
}

async function load(){
 try{
  const r=await fetch('/api/analytics/stats?days='+days,{cache:'no-store'});
  if(r.status===401){$('login').hidden=false;$('dashboard').hidden=true;$('period').hidden=true;return;}
  if(!r.ok)throw Error('Statistiche non disponibili: controlla la configurazione.');
  data=await r.json();
  $('login').hidden=true;$('dashboard').hidden=false;$('period').hidden=false;$('logout').hidden=false;$('error').textContent='';
  render();
 }catch(e){$('error').textContent=e.message;}
}

$('period').addEventListener('click',e=>{
 const b=e.target.closest('button[data-days]');if(!b||Number(b.dataset.days)===days)return;
 days=Number(b.dataset.days);active=-1;
 for(const x of $('period').querySelectorAll('button'))x.setAttribute('aria-pressed',String(x===b));
 load();
});
$('logout').addEventListener('click',async()=>{await fetch('/api/auth/logout',{method:'POST'});location.reload();});
let resize;addEventListener('resize',()=>{clearTimeout(resize);resize=setTimeout(()=>{if(data){drawTrend();drawWeek();}},120);});
load();
