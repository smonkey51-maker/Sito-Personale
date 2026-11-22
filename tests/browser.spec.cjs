const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
const pages=['/','/rag-aziendale.html','/ai-in-locale.html','/progetti.html','/percorso.html','/privacy.html','/404.html'];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  // La lingua si sceglie dal menu a bandiera: lo si apre e si tocca la voce.
  // Su mobile la home si apre con la sola schermata d'ingresso: prima si entra, poi compare la barra.
  const pickLang=async(page,code)=>{
   await page.locator('[data-lang="'+code+'"]').click();
  };
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#heroIntro')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   await expect(page.locator('.hero-cta-row')).toHaveCount(0);
  });
  test('every page loads without errors or horizontal scroll',async({page})=>{
   const errors=[];page.on('pageerror',error=>errors.push(error.message));
   for(const url of pages){
    await page.goto(url);
    await expect(page.locator('h1')).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),url).toBeTruthy();
   }
   expect(errors).toEqual([]);
  });
  test('hero link opens the projects and initiatives page',async({page})=>{
   await page.goto('/');
   await page.locator('.home-projects > .wrap > a[href="progetti.html"]').click();
   await expect(page).toHaveURL(/progetti\.html$/);
   await expect(page.locator('h1')).toHaveText('Progetti ed Iniziative');
   await page.locator('.item-title a[href="rag-aziendale.html"]').click();
   await expect(page.locator('h1')).toHaveText('RAG aziendale');
  });
  test('language switching keeps per-page titles',async({page})=>{
   await page.goto('/ai-in-locale.html');
   await pickLang(page,'en');
   await expect(page.locator('h1')).toHaveText('Local AI Experiment');
   await expect(page).toHaveTitle('Local AI Experiment | Nicolò Forcolin');
   await page.goto('/');
   await expect(page.locator('#homeProjectsTitle')).toHaveText('Projects');
   await pickLang(page,'it');
   await expect(page.locator('#homeProjectsTitle')).toHaveText('Progetti');
  });
  test('Chinese is selectable, translate the page and fit the header',async({page})=>{
   const errors=[];
   page.on('pageerror',e=>errors.push(String(e)));
   page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
   await page.goto('/percorso.html');
   await pickLang(page,'zh');
   await expect(page.locator('html')).toHaveAttribute('lang','zh-Hans');
   await expect(page.locator('h1')).toHaveText('经历');
   await expect(page).toHaveTitle('经历 | Nicolò Forcolin');
   await pickLang(page,'it');
   await expect(page.locator('h1')).toHaveText('Percorso');
   const fits=await page.evaluate(()=>{const w=document.documentElement.clientWidth;return [...document.querySelectorAll('.topbar .lang-btn')].filter(e=>e.offsetParent!==null).every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=w&&r.height>=44})});
   expect(fits).toBe(true);
   expect(errors).toEqual([]);
  });
  test('RAG how-it-works: four-stage diagram on desktop, five stages on mobile',async({page})=>{
   await page.goto('/rag-aziendale.html');
   await expect(page.locator('.how-section button')).toHaveCount(0);
   if(viewport.width>820){
    await expect(page.locator('.how-flow .how-stage:visible')).toHaveCount(4);
    await expect(page.locator('.how-steps-m')).toBeHidden();
   }else{
    await expect(page.locator('.how-steps-m .how-s:visible')).toHaveCount(5);
    await expect(page.locator('.how-flow')).toBeHidden();
   }
   await expect(page.locator('.how-note')).toBeVisible();
  });
  test('local AI page: three-stage diagram and every section visible',async({page})=>{
   await page.goto('/ai-in-locale.html');
   await expect(page.locator('.lab-flow .lab-stage')).toHaveCount(3);
   for(const key of ['c2_solution','c2_problem','c2_summary','c2_learning']) await expect(page.locator('[data-i18n="'+key+'"]')).toBeVisible();
   await expect(page.locator('.lab-heading')).toHaveCount(5);
  });
  test('the site stays dark whatever the browser preference',async({page})=>{
   for(const scheme of ['dark','light']){
    await page.emulateMedia({colorScheme:scheme});
    await page.goto('/');
    await expect(page.locator('body')).toHaveCSS('background-color','rgb(14, 14, 15)');
   }
   await expect(page.locator('.theme-toggle')).toHaveCount(0);
  });
  test('portrait loading',async({page})=>{
   await page.goto('/');
   const image=page.locator('#avatarPhoto');
   await expect(image).toHaveJSProperty('complete',true);
   expect(await image.evaluate(el=>el.naturalWidth)).toBeGreaterThan(0);
  });
  test('the closing invitation is a visible button that leads to the email on the home',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('.page-cta p')).toHaveText('Per parlare di un progetto');
   await expect(page.locator('.page-cta .cta-button')).toHaveText('Scrivimi');
   await page.locator('.page-cta .cta-button').click();
   await expect(page).toHaveURL(/index\.html#collabTitle|\/#collabTitle/);
   await expect(page.locator('#homeEmail a')).toHaveText('nic.forcolin@gmail.com');
   await expect(page.locator('#homeEmail a')).toHaveAttribute('href','mailto:nic.forcolin@gmail.com');
  });
  test('the technical pages have a glossary and the career page keeps roles out of an ordered list',async({page})=>{
   for(const u of ['/rag-aziendale.html','/ai-in-locale.html']){
    await page.goto(u);
    await expect(page.locator('.glossary dt').first()).toBeVisible();
    await expect(page.locator('.glossary dd').first()).toBeVisible();
   }
   await page.goto('/percorso.html');
   await expect(page.locator('ol')).toHaveCount(0);
   await expect(page.locator('.career article')).toHaveCount(5);
   await expect(page.locator('.career .page-block-label').first()).toHaveText('2026 – oggi');
  });
  test('home lists the three projects, each with its own link, and no redundant sections',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.home-proof')).toHaveCount(0);
   await expect(page.locator('.home-projects')).toHaveCount(1);
   await expect(page.locator('.home-project')).toHaveCount(2);
   await expect(page.locator('.home-project a[href="rag-aziendale.html"]')).toBeVisible();
   await expect(page.locator('.home-project a[href="ai-in-locale.html"]')).toBeVisible();
   await expect(page.locator('.home-services')).toHaveCount(0);
   await expect(page.locator('.home-audience')).toHaveCount(0);
   await expect(page.locator('.hero-audience')).toBeVisible();
   await expect(page.locator('.hero-cta-row')).toHaveCount(0);
   await expect(page.locator('.search-btn')).toHaveCount(0);
   await expect(page.locator('.home-contact')).toHaveCount(0);
  });
  test('home has a strip of three numbers under the portrait, translated',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.home-stats-list li')).toHaveCount(3);
   await expect(page.locator('.home-stats-list li').first()).toContainText('colleghi affiancati');
   await pickLang(page,'en');
   await expect(page.locator('.home-stats-list li').first()).toContainText('colleagues supported');
  });
  test('home lists who I worked with and shows the email under the numbers',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.home-reach')).toContainText('InfoCamere, DABO, IdeaGrip');
   await expect(page.locator('#homeEmail a').first()).toHaveAttribute('href','mailto:nic.forcolin@gmail.com');
   await page.locator('.home-collab-faq > summary').click();
   await expect(page.locator('.faq-list .faq-item')).toHaveCount(3);
   await expect(page.locator('.faq-list details, .faq-list summary')).toHaveCount(0);
   for(const answer of await page.locator('.faq-list .faq-item p').all()) await expect(answer).toBeVisible();
   await page.locator('.home-collab-faq > summary').click();
   await expect(page.locator('.faq-list')).toBeHidden();
  });
  test('home hero opens with the real introduction',async({page})=>{
   await page.goto('/');
   await expect(page.locator('h1#hero-name')).toHaveText('Nicolò Forcolin');
   await expect(page.locator('#heroIntro')).toContainText('Informatico per le PA');
   await expect(page.locator('#heroIntro')).not.toContainText('Ho il vizio');
   await expect(page.locator('#heroIntro')).not.toContainText('InfoCamere');
   await expect(page.locator('.site-name')).toHaveText('Nicolò Forcolin');
   await expect(page.locator('#collabTitle')).toHaveText('Disponibile per progetti AI con PA e PMI.');
   await expect(page.locator('.colophon a[href*="linkedin"]')).toHaveCount(1);
   await expect(page.locator('.site-name')).toHaveAttribute('aria-label','Nicolò Forcolin, home');
   await pickLang(page,'en');
   await expect(page.locator('#heroIntro')).toContainText('Public-sector IT specialist');
  });
  {
   test('the three languages sit side by side in the bar, the current one is marked, and a click switches',async({page})=>{
    await page.goto('/progetti.html');
    await expect(page.locator('#langList .lang-btn:visible')).toHaveCount(3);
    await expect(page.locator('#langList .lang-btn.on')).toHaveText('Italiano');
    await page.locator('[data-lang="en"]').click();
    await expect(page.locator('h1')).toHaveText('Projects and Initiatives');
    await expect(page.locator('#langList .lang-btn.on')).toHaveText('English');
    await expect(page.locator('#langList .lang-btn:visible')).toHaveCount(3);
   });
   test('the bar has no page links and no three-line menu',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.menu-toggle')).toHaveCount(0);
    await expect(page.locator('#siteMenu')).toHaveCount(0);
    await expect(page.locator('.lang-toggle')).toHaveCount(0);
   });
  }
  test('the name in the bar is written in full at every width',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.site-name')).toBeVisible();
   await expect(page.locator('.site-name')).toHaveText('Nicolò Forcolin');
  });
  if(viewport.width<=700){
   test('on mobile the first screen shows the bar with the languages, the portrait and the introduction',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.topbar')).toBeVisible();
    await expect(page.locator('#langList')).toBeInViewport();
    await expect(page.locator('.m-entry')).toHaveCount(0);
    await expect(page.locator('#hero-name')).toBeVisible();
    const photo=await page.locator('.hero-photo-frame').boundingBox();
    const heading=await page.locator('#hero-name').boundingBox();
    expect(heading.y).toBeGreaterThanOrEqual(photo.y+photo.height-2);
    expect(photo.height).toBeGreaterThanOrEqual(350);
    await expect(page.locator('.hero-cta-row')).toHaveCount(0);
   });
  }
 });
}
test.describe('browser language',()=>{
 test.use({locale:'en-US',viewport:{width:375,height:812}});
 test('a non-Italian browser opens the site in English',async({page})=>{
  await page.goto('/');
  await expect(page.locator('#heroIntro')).toContainText('Public-sector IT specialist');
  await expect(page.locator('html')).toHaveAttribute('lang','en');
 });
});
