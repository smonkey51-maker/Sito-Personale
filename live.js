(function(){
  'use strict';
  var root=document.documentElement;
  var words={it:{explore:'Esplora',search:'Trova una sezione',close:'Chiudi',previous:'Capitolo precedente',next:'Capitolo successivo',size:'Testo più grande',other:'Altro progetto',progress:'Avanzamento della lettura'},en:{explore:'Explore',search:'Find a section',close:'Close',previous:'Previous chapter',next:'Next chapter',size:'Larger text',other:'Other project',progress:'Reading progress'},fr:{explore:'Explorer',search:'Trouver une section',close:'Fermer',previous:'Chapitre précédent',next:'Chapitre suivant',size:'Texte plus grand',other:'Autre projet',progress:'Progression de lecture'}};
  function t(key){return (words[root.lang]||words.it)[key];}
  var reduced=matchMedia('(prefers-reduced-motion: reduce)');
  var reveal=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-seen');reveal.unobserve(e.target);}});},{threshold:0.06});
  document.querySelectorAll('main > .rv, .stat, .job-row, .credential-row').forEach(function(el){el.classList.add('live-reveal');reveal.observe(el);});
  root.classList.add('live-ready');
  var launcher=document.createElement('button');launcher.type='button';launcher.className='explore-launch';launcher.textContent=t('explore');
  document.querySelector('.desktop-nav').after(launcher);
  var finder=document.createElement('dialog');finder.className='section-finder';
  finder.innerHTML='<div class="finder-head"><h2></h2><button type="button" class="finder-close"></button></div><input type="search" autocomplete="off"><nav></nav>';
  document.body.appendChild(finder);
  var input=finder.querySelector('input');
  function renderFinder(){
    launcher.textContent=t('explore');finder.querySelector('h2').textContent=t('search');finder.querySelector('button').textContent=t('close');input.setAttribute('aria-label',t('search'));
    var nav=finder.querySelector('nav');nav.textContent='';
    document.querySelectorAll('.section-rail-links a').forEach(function(source){
      var a=document.createElement('a');a.href=source.getAttribute('href');a.textContent=source.textContent;
      a.hidden=!!input.value && !source.textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase());
      a.addEventListener('click',function(){finder.close();document.querySelector(a.hash).scrollIntoView({behavior:reduced.matches?'instant':'smooth'});});nav.appendChild(a);
    });
  }
  launcher.addEventListener('click',function(){input.value='';renderFinder();finder.showModal();input.focus();});
  finder.querySelector('button').addEventListener('click',function(){finder.close();});input.addEventListener('input',renderFinder);
  finder.addEventListener('close',function(){launcher.focus();});
  var reader=document.querySelector('.project-reader');
  if(!reader)return;
  var toolbar=document.createElement('div');toolbar.className='live-reader-tools';
  toolbar.innerHTML='<div class="reader-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span></span></div><div class="reader-controls"><button type="button" data-action="previous"></button><span class="chapter-position"></span><button type="button" data-action="next"></button><button type="button" data-action="size" aria-pressed="false"></button><button type="button" data-action="other"></button></div>';
  reader.prepend(toolbar);
  var chapters=[];var current=0;var queued=false;
  function refresh(){
    queued=false;chapters=Array.from(reader.querySelectorAll('.case-block'));current=0;
    chapters.forEach(function(el,i){if(el.getBoundingClientRect().top<reader.getBoundingClientRect().top+190)current=i;});
    var max=reader.scrollHeight-reader.clientHeight;var value=max>0?Math.round(reader.scrollTop/max*100):0;
    var bar=toolbar.querySelector('[role="progressbar"]');bar.setAttribute('aria-valuenow',value);bar.setAttribute('aria-label',t('progress'));bar.firstChild.style.transform='scaleX('+(value/100)+')';
    toolbar.querySelector('.chapter-position').textContent=chapters.length?(current+1)+' / '+chapters.length:'';
    toolbar.querySelector('[data-action="previous"]').disabled=current===0;toolbar.querySelector('[data-action="next"]').disabled=current===chapters.length-1;
    toolbar.querySelectorAll('button').forEach(function(button){button.textContent=t(button.dataset.action);});
  }
  function queue(){if(!queued){queued=true;requestAnimationFrame(refresh);}}
  reader.addEventListener('scroll',queue,{passive:true});
  new MutationObserver(queue).observe(reader,{childList:true});
  new MutationObserver(function(){renderFinder();queue();}).observe(root,{attributes:true,attributeFilter:['lang']});
  toolbar.addEventListener('click',function(event){
    var button=event.target.closest('button');if(!button)return;
    var action=button.dataset.action;
    if(action==='size'){var larger=reader.classList.toggle('larger-reading');button.setAttribute('aria-pressed',String(larger));queue();return;}
    if(action==='other'){
      var active=document.querySelector('.case-reader[open]');var next=Array.from(document.querySelectorAll('.case-reader')).find(function(el){return el!==active;});
      if(next)next.querySelector('summary').click();queue();return;
    }
    var target=chapters[current+(action==='next'?1:-1)];
    if(target){target.scrollIntoView({block:'start',behavior:reduced.matches?'instant':'smooth'});var heading=target.querySelector('h4,h3');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}}
  });
  refresh();renderFinder();
})();
