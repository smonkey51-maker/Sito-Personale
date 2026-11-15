const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
const pages=['/','/rag-aziendale.html','/ai-in-locale.html','/progetti.html','/percorso.html','/privacy.html','/404.html'];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  // La lingua si sceglie dal menu a bandiera: lo si apre e si tocca la voce.
  // Su mobile la home si apre con la sola schermata d'ingresso: prima si entra, poi compare la barra.
  const enterHome=async(page)=>{
   const entry=page.locator('.m-entry-link');
   if(await entry.isVisible()){await page.emulateMedia({reducedMotion:'reduce'});await entry.click();await expect(page.locator('.topbar')).toBeVisible();}
  };
  const pickLang=async(page,code)=>{
   await enterHome(page);
   await page.locator('[data-lang="'+code+'"]').click();
  };
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toBeVisible();
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
   await expect(page.locator('h1')).toHaveText('RAG');
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
   await expect(page.locator('.lab-heading')).toHaveCount(4);
  });
  test('dark theme and portrait loading',async({page})=>{
   await page.goto('/');
   await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
   await expect(page.locator('.theme-toggle')).toHaveCount(0);
   const image=page.locator('#avatarPhoto');
   await expect(image).toHaveJSProperty('complete',true);
   expect(await image.evaluate(el=>el.naturalWidth)).toBeGreaterThan(0);
  });
  test('the invitation to get in touch is one sentence with a clickable link that opens the contacts',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('.page-cta p')).toHaveText('Per parlare di un progetto, contattami.');
   await expect(page.locator('.page-cta .contact-trigger')).toHaveText('contattami');
   await expect(page.locator('.page-cta .cta-primary')).toHaveCount(0);
   await page.locator('.page-cta .contact-trigger').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
  });
  test('in Per chi the last invitation is a plain Contattami link next to the other two',async({page})=>{
   await page.goto('/progetti.html#per-chi');
   await expect(page.locator('.page-cta .cta-inline')).toHaveText('contattami');
   await expect(page.locator('.page-cta [data-i18n="cta_before"]')).toBeHidden();
   await expect(page.locator('.page-cta .cta-inline')).toBeVisible();
   await page.locator('.page-cta .cta-inline').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
  });
  test('contacts open in a dialog with phone, email and LinkedIn',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('.topbar-contact')).toHaveCount(0);
   await page.locator('.page-cta .contact-trigger').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
   await page.locator('#cmEmail .reveal-btn').click();
   await expect(page.locator('#cmEmail a')).toHaveText('nic.forcolin@gmail.com');
   await expect(page.locator('#cmEmail a')).toHaveAttribute('href','mailto:nic.forcolin@gmail.com');
   await page.locator('#cmPhone .reveal-btn').click();
   await expect(page.locator('#cmPhone a')).toHaveText('+39 347 908 1966');
   await page.keyboard.press('Escape');
   await expect(page.locator('#contactDialog')).not.toBeVisible();
  });
  test('home exposes the two projects without redundant hero links',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.home-proof')).toHaveCount(0);
   await expect(page.locator('.home-projects')).toHaveCount(1);
   await expect(page.locator('.home-project-grid h3 a')).toHaveCount(2);
   await expect(page.locator('.home-services')).toBeVisible();
   await expect(page.locator('.hero-cta-row')).toHaveCount(0);
   await expect(page.locator('.home-project-grid a[href="rag-aziendale.html"]')).toBeVisible();
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
  test('home hero uses the approved greeting and keeps the real introduction',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toHaveText('Ciao, sono Nicolò Forcolin');
   await expect(page.locator('#heroIntro')).toContainText('IT per le PA dal 2022, Tech Lover dal 1992.');
   await expect(page.locator('#heroIntro')).toContainText('Passo le giornate a rendere semplice quello che semplice non è.');
   await expect(page.locator('#heroIntro')).not.toContainText('InfoCamere');
   await expect(page.locator('.site-name .sn-short')).toHaveText('NForcolin');
   await expect(page.locator('.site-name')).toHaveAttribute('aria-label','Nicolò Forcolin, home');
   await pickLang(page,'en');
   await expect(page.locator('#heroIntro')).toContainText('IT for public administration since 2022, tech lover since 1992.');
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
    await enterHome(page);
    await expect(page.locator('.menu-toggle')).toHaveCount(0);
    await expect(page.locator('#siteMenu')).toHaveCount(0);
    await expect(page.locator('.lang-toggle')).toHaveCount(0);
   });
  }
  if(viewport.width>700){
   test('on desktop the name is written in full',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.site-name .sn-full')).toBeVisible();
    await expect(page.locator('.site-name .sn-full')).toHaveText('Nicolò Forcolin');
    await expect(page.locator('.site-name .sn-short')).toBeHidden();
   });
  }
  if(viewport.width<=700){
   test('on mobile the first screen is only the portrait, the orange name and the entry mark; entering shows the introduction',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('/');
    await expect(page.locator('.topbar')).toBeHidden();
    await expect(page.locator('.m-entry-photo')).toBeInViewport();
    await expect(page.locator('.m-entry-name')).toBeInViewport();
    await expect(page.locator('.entry-dot')).toBeInViewport();
    await expect(page.locator('#hero-name')).not.toBeInViewport();
    await page.locator('.m-entry-link').click();
    await expect(page.locator('#hero-name')).toBeInViewport();
    await expect(page.locator('.topbar')).toBeVisible();
    await expect(page.locator('#langList')).toBeInViewport();
    const photo=await page.locator('.hero-photo-frame').boundingBox();
    const heading=await page.locator('#hero-name').boundingBox();
    expect(heading.y).toBeGreaterThanOrEqual(photo.y+photo.height-2);
    expect(heading.y-photo.y-photo.height).toBeLessThanOrEqual(40);
    expect(photo.height).toBeGreaterThanOrEqual(350);
    const intro=await page.locator('#heroIntro').boundingBox();
    expect(intro.y+intro.height).toBeLessThanOrEqual(812);
    await expect(page.locator('.hero-cta-row')).toHaveCount(0);
   });
  }
 });
}
test.describe('browser language',()=>{
 test.use({locale:'en-US',viewport:{width:375,height:812}});
 test('a non-Italian browser opens the site in English',async({page})=>{
  await page.goto('/');
  await expect(page.locator('#heroIntro')).toContainText('IT for public administration');
  await expect(page.locator('html')).toHaveAttribute('lang','en');
 });
});
