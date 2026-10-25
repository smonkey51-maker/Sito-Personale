const {test,expect}=require('@playwright/test');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
const pages=['/','/rag-aziendale.html','/ai-in-locale.html','/iniziative.html','/progetti.html','/percorso.html','/privacy.html'];
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
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   if(viewport.width>700) await expect(page.locator('.hero-filmstrip')).toBeVisible();
   else await expect(page.locator('.hero-filmstrip')).toBeHidden();
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
  test('filmstrip and hero CTA lead to the project pages',async({page})=>{
   await page.goto('/');
   await page.locator('.hero-btn.solid').first().click();
   await expect(page).toHaveURL(/rag-aziendale\.html$/);
   await expect(page.locator('h1')).toHaveText('RAG aziendale');
   if(viewport.width>700){
    await page.goto('/');
    await page.locator('.filmstrip-tile[href="ai-in-locale.html"]').click();
    await expect(page.locator('h1')).toHaveText('Sperimentazione AI in locale');
   }
  });
  test('hero button opens the projects and initiatives page',async({page})=>{
   await page.goto('/');
   await page.locator('.hero-btn.solid').nth(1).click();
   await expect(page).toHaveURL(/progetti\.html$/);
   await expect(page.locator('h1')).toHaveText('Progetti ed Iniziative');
   await page.locator('.item-title a[href="rag-aziendale.html"]').click();
   await expect(page.locator('h1')).toHaveText('RAG aziendale');
  });
  test('inner pages mark the current section and link onward',async({page})=>{
   await page.goto('/iniziative.html');
   await expect(page.locator('.desktop-nav a[aria-current="page"]')).toHaveAttribute('href','iniziative.html');
   await page.locator('.page-next-tile[href="rag-aziendale.html"]').click();
   await expect(page.locator('h1')).toHaveText('RAG aziendale');
  });
  test('language switching keeps per-page titles',async({page})=>{
   await page.goto('/ai-in-locale.html');
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('h1')).toHaveText('Local AI Experiment');
   await expect(page).toHaveTitle('Local AI Experiment | Nicolò Forcolin');
   await page.goto('/');
   await expect(page.locator('[data-i18n="case1_title"]').first()).toHaveText('Enterprise Knowledge Retrieval');
   await revealBar(page);
   await page.locator('[data-lang="it"]').click();
   await expect(page.locator('[data-i18n="case1_title"]').first()).toHaveText('RAG aziendale');
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
   await expect(page.locator('.site-name')).toHaveText('Nicolò Forcolin');
   await revealBar(page);
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('#heroIntro')).toContainText('middle and top management needs');
  });
  if(viewport.width<=700){
   test('mobile landing shows only the portrait and an enter button until the page scrolls',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.topbar')).toHaveCSS('opacity','0');
    await expect(page.locator('.scroll-btn')).toBeVisible();
    const heading=await page.locator('#hero-name').boundingBox();
    expect(heading.y).toBeGreaterThanOrEqual(page.viewportSize().height-2);
    await page.evaluate(()=>window.scrollTo(0,200));
    await expect(page.locator('.topbar')).toHaveCSS('opacity','1');
    await expect(page.locator('.hero-portrait')).toBeHidden();
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
 test('a non-Italian browser opens the site in English with an arrow on the enter button',async({page})=>{
  await page.goto('/');
  await expect(page.locator('.scroll-btn')).toHaveText('Enter the site');
  await expect(page.locator('.scroll-btn svg')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang','en');
 });
});
