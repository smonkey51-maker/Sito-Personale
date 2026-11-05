const $=id=>document.getElementById(id);
const SVG='http://www.w3.org/2000/svg';
const num=n=>Math.round(n).toLocaleString('it-IT');
const dateOf=day=>new Date(day+'T12:00:00Z');
const fmt=(day,opts)=>dateOf(day).toLocaleDateString('it-IT',{timeZone:'UTC',...opts});
const el=(name,attrs={},text)=>{const node=document.createElementNS(SVG,name);for(const [k,v] of Object.entries(attrs))node.setAttribute(k,v);if(text!==undefined)node.textContent=text;return node;};
let days=30,data=null,active=-1;
try{const saved=Number(localStorage.getItem('nf-days'));if([7,30,90].includes(saved))days=saved;}catch(e){}

// Scala dell'asse Y con passi "tondi" (1, 2, 5 per potenze di dieci).
function niceMax(max){if(max<=4)return 4;const step=10**Math.floor(Math.log10(max/4));for(const m of [1,2,5,10])if(m*step*4>=max)return m*step*4;return max;}

function drawTrend(){
 const box=$('chart'),rows=data.days;
 box.querySelector('svg')?.remove();
 const w=box.clientWidth-24,h=box.clientHeight-28,left=40,bottom=28,top=4;
 const max=niceMax(Math.max(...rows.map(r=>r.views)));
 const slot=(w-left)/rows.length,bw=Math.max(2,Math.min(28,slot*.68));
 const cx=i=>left+slot*i+slot/2;
 const y=v=>top+(h-bottom-top)*(1-v/max);
 const peakAt=rows.reduce((p,r,i)=>r.views>rows[p].views?i:p,0);
 const svg=el('svg',{viewBox:`0 0 ${w} ${h}`,'aria-hidden':'true'});
 for(let t=0;t<=4;t++){const v=max*t/4;svg.append(el('line',{class:'grid',x1:left,x2:w,y1:y(v),y2:y(v)}),el('text',{x:left-10,y:y(v)+4,'text-anchor':'end'},num(v)));}
 const labels=rows.length<=7&&w>=480?rows.length:Math.min(rows.length,w<480?3:6);
 for(let k=0;k<labels;k++){const i=Math.round(k*(rows.length-1)/Math.max(1,labels-1));svg.append(el('text',{x:cx(i),y:h-6,'text-anchor':k===0?'start':k===labels-1?'end':'middle'},fmt(rows[i].day,{day:'numeric',month:'short'})));}
 const bars=rows.map((r,i)=>{const bh=Math.max(r.views?2:1,y(0)-y(r.views));const rect=el('rect',{class:'bar'+(i===peakAt&&r.views?' is-peak':''),x:cx(i)-bw/2,y:y(0)-bh,width:bw,height:bh});svg.append(rect);return rect;});
 box.setAttribute('aria-label',`Grafico delle visualizzazioni giornaliere: ${num(data.totals.views)} in ${rows.length} giorni.`);
 box.prepend(svg);
 const show=i=>{
  active=i;const info=$('chart-info');
  bars.forEach((r,k)=>r.classList.toggle('is-active',k===i));
  if(i<0){info.textContent='';return;}
  const r=rows[i];
  info.textContent=`${fmt(r.day,{weekday:'short',day:'numeric',month:'short'})}: ${num(r.views)} visualizzazioni, ${num(r.unique)} unici stimati`;
 };
 const pick=e=>{const r=box.getBoundingClientRect(),px=(e.clientX-r.left-8)*w/(r.width-24);show(Math.max(0,Math.min(rows.length-1,Math.floor((px-left)/slot))));};
 box.onpointermove=pick;box.onpointerdown=pick;box.onpointerleave=()=>show(-1);box.onblur=()=>show(-1);
 box.onkeydown=e=>{const step={ArrowRight:1,ArrowLeft:-1}[e.key];if(e.key==='Home'||e.key==='End'){e.preventDefault();show(e.key==='Home'?0:rows.length-1);}else if(step){e.preventDefault();show(Math.max(0,Math.min(rows.length-1,(active<0?rows.length-1:active+step))));}else if(e.key==='Escape')show(-1);};
 if(active>=rows.length)active=-1;if(active>=0)show(active);
}

function drawList(listId,emptyId,counts,label){
 const entries=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,8);
 const top=entries[0]?.[1]||1,total=Object.values(counts).reduce((s,n)=>s+n,0)||1;
 $(emptyId).hidden=entries.length>0;
 $(listId).replaceChildren(...entries.map(([key,n])=>{
  const li=document.createElement('li'),name=document.createElement('span'),count=document.createElement('span'),track=document.createElement('span'),fill=document.createElement('span');
  name.className='name';name.textContent=label(key);name.title=key;
  count.className='count';count.textContent=`${num(n)} (${Math.round(n/total*100)}%)`;
  track.className='track';fill.className='fill';fill.style.transform=`scaleX(${n/top})`;track.append(fill);
  li.append(name,count,track);return li;
 }));
}
function drawPages(){drawList('pages','pages-empty',data.totals.pages,path=>path==='/'?'Home':path.replace(/^\//,''));}
function drawSources(){
 const counts={...(data.totals.sources||{})},known=Object.values(counts).reduce((s,n)=>s+n,0);
 /* Visits recorded before sources existed have no source: show them as direct. */
 const rest=data.totals.views-known;if(rest>0)counts['Diretto o non indicato']=(counts['Diretto o non indicato']||0)+rest;
 drawList('sources','sources-empty',counts,name=>name);
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
 $('week-peak').textContent=max?'Picco: '+names[avg.indexOf(max)]:'';
}

function totalsOf(rows){
 const t={views:0,uniqueDaily:0,pages:{},sources:{}};
 for(const r of rows){t.views+=r.views;t.uniqueDaily+=r.unique;for(const [p,n] of Object.entries(r.pages||{}))t.pages[p]=(t.pages[p]||0)+n;for(const [p,n] of Object.entries(r.sources||{}))t.sources[p]=(t.sources[p]||0)+n;}
 return t;
}

function render(){
 const rows=data.days,t=data.totals;
 $('views').textContent=num(t.views);
 $('range').textContent=rows.length?`${fmt(rows[0].day,{day:'numeric',month:'short'})} – ${fmt(rows[rows.length-1].day,{day:'numeric',month:'short',year:'numeric'})}`:'';
 const delta=$('delta');
 if(data.prev&&data.prev.views>0){const d=Math.round((t.views-data.prev.views)/data.prev.views*100);delta.textContent=`${d>0?'+':''}${d}% sul periodo precedente (${num(data.prev.views)})`;}
 else if(data.prev)delta.textContent='Nessuna visita nel periodo precedente';
 else delta.textContent='Totale periodo';
 const last=rows[rows.length-1],before=rows[rows.length-2];
 $('today').textContent=num(last?.views||0);
 $('today-sub').textContent=before?`ieri ${num(before.views)}`:'';
 $('unique').textContent=num(t.uniqueDaily);
 $('average').textContent=(t.views/Math.max(1,rows.length)).toLocaleString('it-IT',{maximumFractionDigits:1});
 const peak=rows.reduce((a,b)=>b.views>a.views?b:a,rows[0]);
 $('peak').textContent=peak&&peak.views?num(peak.views):'0';
 $('peak-date').textContent=peak&&peak.views?fmt(peak.day,{day:'numeric',month:'short'})+' (record)':'Nessuna visita';
 $('days').replaceChildren(...rows.slice().reverse().map(r=>{const tr=document.createElement('tr');for(const v of [fmt(r.day,{weekday:'short',day:'numeric',month:'short',year:'numeric'}),num(r.views),num(r.unique)]){const td=document.createElement('td');td.textContent=v;tr.append(td);}return tr;}));
 drawTrend();drawPages();drawSources();drawWeek();
}

async function load(){
 try{
  const span=days*2<=90?days*2:days;
  const r=await fetch('/api/analytics/stats?days='+span,{cache:'no-store'});
  if(r.status===401){$('login').hidden=false;$('dashboard').hidden=true;$('period').hidden=true;return;}
  if(!r.ok)throw Error('Statistiche non disponibili: controlla la configurazione.');
  const raw=await r.json(),all=raw.days,cur=all.slice(-days),prev=all.length>days?all.slice(0,all.length-days):null;
  data={days:cur,totals:totalsOf(cur),prev:prev&&totalsOf(prev)};
  $('login').hidden=true;$('dashboard').hidden=false;$('period').hidden=false;$('logout').hidden=false;$('error').textContent='';
  render();
 }catch(e){$('error').textContent=e.message;}
}

$('period').addEventListener('click',e=>{
 const b=e.target.closest('button[data-days]');if(!b||Number(b.dataset.days)===days)return;
 days=Number(b.dataset.days);active=-1;
 try{localStorage.setItem('nf-days',String(days));}catch(e){}
 for(const x of $('period').querySelectorAll('button'))x.setAttribute('aria-pressed',String(x===b));
 load();
});
for(const x of $('period').querySelectorAll('button'))x.setAttribute('aria-pressed',String(Number(x.dataset.days)===days));
$('logout').addEventListener('click',async()=>{await fetch('/api/auth/logout',{method:'POST'});location.reload();});
let resize;addEventListener('resize',()=>{clearTimeout(resize);resize=setTimeout(()=>{if(data){drawTrend();drawWeek();}},120);});
load();
