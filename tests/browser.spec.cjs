const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
const pages=['/','/rag-aziendale.html','/ai-in-locale.html','/iniziative.html','/progetti.html','/percorso.html','/privacy.html','/404.html'];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  // Su mobile la home si apre con la sola foto: la barra compare dopo un piccolo scroll.
  const revealBar=async page=>{
   if(viewport.width<=700){
    await page.evaluate(()=>window.scrollTo(0,200));
    await expect(page.locator('.topbar')).toHaveCSS('opacity','1');
   }
  };
  // La lingua si sceglie dal menu a bandiera: lo si apre e si tocca la voce.
  const pickLang=async(page,code)=>{
   await revealBar(page);
   await page.locator('.lang-toggle').click();
   await page.locator('[data-lang="'+code+'"]').click();
  };
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   await expect(page.locator('.hero-cta-row .hero-link')).toHaveCount(3);
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
  test('the search lens finds a page by its text',async({page})=>{
   await page.goto('/progetti.html');
   await page.locator('.search-btn').click();
   await page.locator('#siteSearch').fill('sperimentazione');
   await expect(page.locator('.search-results a').first()).toBeVisible();
   await expect(page.locator('.search-results a').first()).toHaveAttribute('href',/\.html$/);
   await page.keyboard.press('Escape');
   await expect(page.locator('.search-panel')).toBeHidden();
  });
  test('hero link opens the projects and initiatives page',async({page})=>{
   await page.goto('/');
   await revealBar(page);
   await page.locator('.hero-link').first().click();
   await expect(page).toHaveURL(/progetti\.html$/);
   await expect(page.locator('h1')).toHaveText('Progetti ed Iniziative');
   await page.locator('.item-title a[href="rag-aziendale.html"]').click();
   await expect(page.locator('h1')).toHaveText('RAG');
  });
  test('hero Contattami opens the contact dialog',async({page})=>{
   await page.goto('/');
   await revealBar(page);
   await page.locator('.hero-cta-row .contact-trigger').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
  });
  test('language switching keeps per-page titles',async({page})=>{
   await page.goto('/ai-in-locale.html');
   await pickLang(page,'en');
   await expect(page.locator('h1')).toHaveText('Local AI Experiment');
   await expect(page).toHaveTitle('Local AI Experiment | Nicolò Forcolin');
   await page.goto('/');
   await expect(page.locator('.hero-cta-row .hero-link').first()).toHaveText('Projects');
   await pickLang(page,'it');
   await expect(page.locator('.hero-cta-row .hero-link').first()).toHaveText('Progetti');
  });
  test('language menu opens from the flag, lists four languages and closes with Esc or a choice',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('#langList')).toBeHidden();
   await page.locator('.lang-toggle').click();
   await expect(page.locator('#langList')).toBeVisible();
   await expect(page.locator('#langList .lang-btn')).toHaveCount(4);
   await page.keyboard.press('Escape');
   await expect(page.locator('#langList')).toBeHidden();
   await expect(page.locator('.lang-toggle')).toBeFocused();
   await page.locator('.lang-toggle').click();
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('#langList')).toBeHidden();
   await expect(page.locator('h1')).toHaveText('Projects and Initiatives');
  });
  test('Chinese and Twi are selectable, translate the page and fit the header',async({page})=>{
   const errors=[];
   page.on('pageerror',e=>errors.push(String(e)));
   page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
   await page.goto('/percorso.html');
   await pickLang(page,'zh');
   await expect(page.locator('html')).toHaveAttribute('lang','zh-Hans');
   await expect(page.locator('h1')).toHaveText('经历');
   await expect(page).toHaveTitle('经历 | Nicolò Forcolin');
   await pickLang(page,'tw');
   await expect(page.locator('html')).toHaveAttribute('lang','tw');
   await expect(page.locator('h1')).toHaveText('Adwuma mu suahu');
   await pickLang(page,'it');
   await expect(page.locator('h1')).toHaveText('Percorso');
   const fits=await page.evaluate(()=>{const w=document.documentElement.clientWidth;return [...document.querySelectorAll('.topbar .lang-toggle,.topbar .search-btn,.topbar .menu-toggle')].every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=w&&r.height>=44})});
   expect(fits).toBe(true);
   await page.locator('.lang-toggle').click();
   const listFits=await page.evaluate(()=>{const w=document.documentElement.clientWidth;return [...document.querySelectorAll('#langList .lang-btn')].every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=w&&r.height>=44})});
   expect(listFits).toBe(true);
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
  test('contacts open in a dialog with phone and LinkedIn only',async({page})=>{
   await page.goto('/');
   await revealBar(page);
   await expect(page.locator('.topbar-contact')).toHaveCount(0);
   await page.locator('.menu-toggle').click();
   await expect(page.locator('#siteMenu')).toBeVisible();
   await page.locator('#siteMenu .contact-trigger').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
   await expect(page.locator('#siteMenu')).toBeHidden();
   await expect(page.locator('#cmEmail')).toHaveCount(0);
   await page.locator('#cmPhone .reveal-btn').click();
   await expect(page.locator('#cmPhone a')).toHaveText('+39 347 908 1966');
   await page.keyboard.press('Escape');
   await expect(page.locator('#contactDialog')).not.toBeVisible();
  });
  test('home hero names me, introduces me and has no menu',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toContainText('Nicolò Forcolin');
   await expect(page.locator('#heroIntro')).toContainText('InfoCamere');
   await expect(page.locator('.desktop-nav')).toHaveCount(0);
   await expect(page.locator('.site-name')).toHaveText('NForcolin');
   await expect(page.locator('.site-name')).toHaveAttribute('aria-label','Nicolò Forcolin, home');
   await pickLang(page,'en');
   await expect(page.locator('#heroIntro')).toContainText('I bring AI into everyday work');
  });
  if(viewport.width<=700){
   test('mobile landing shows only the portrait and an enter button until the page scrolls',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.menu-toggle')).not.toBeInViewport();
    await expect(page.locator('.topbar')).toHaveCSS('opacity','0');
    await expect(page.locator('.scroll-btn')).toBeVisible();
    const heading=await page.locator('#hero-name').boundingBox();
    expect(heading.y).toBeGreaterThanOrEqual(page.viewportSize().height-2);
    await page.evaluate(()=>window.scrollTo(0,200));
    await expect(page.locator('.topbar')).toHaveCSS('opacity','1');
    await expect(page.locator('.hero-portrait')).toBeHidden();
   });
   test('on mobile a tap anywhere on the landing enters the site',async({page})=>{
    await page.goto('/');
    await page.mouse.click(page.viewportSize().width/2,80);
    await expect(page.locator('.topbar')).toHaveCSS('opacity','1');
    await expect(page.locator('#hero-name')).toBeInViewport();
   });
   test('on mobile the inline nav is hidden and the menu lists the pages',async({page})=>{
    await page.goto('/iniziative.html');
    await expect(page.locator('.desktop-nav')).toBeHidden();
    await page.locator('.menu-toggle').click();
    await expect(page.locator('#siteMenu a[href="progetti.html"]')).toBeVisible();
    await expect(page.locator('#siteMenu a[aria-current="page"]')).toHaveAttribute('href','iniziative.html');
    await page.keyboard.press('Escape');
    await expect(page.locator('#siteMenu')).toBeHidden();
    await expect(page.locator('.menu-toggle')).toBeFocused();
   });
  }
 });
}
test.describe('browser language',()=>{
 test.use({locale:'en-US',viewport:{width:375,height:812}});
 test('a non-Italian browser opens the site in English with the enter button translated',async({page})=>{
  await page.goto('/');
  await expect(page.locator('.scroll-btn')).toHaveText('Enter the site');
  await expect(page.locator('.hero-entry-name')).toHaveText('Nicolò Forcolin');
  await expect(page.locator('html')).toHaveAttribute('lang','en');
 });
});
