const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
const pages=['/','/rag-aziendale.html','/ai-in-locale.html','/iniziative.html','/progetti.html','/percorso.html','/privacy.html','/404.html'];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  // La lingua si sceglie dal menu a bandiera: lo si apre e si tocca la voce.
  const pickLang=async(page,code)=>{
   await page.locator('.lang-toggle').click();
   await page.locator('[data-lang="'+code+'"]').click();
  };
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   await expect(page.locator('.hero-cta-row .hero-link:visible')).toHaveCount(3);
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
   await page.locator('.hero-link').first().click();
   await expect(page).toHaveURL(/progetti\.html$/);
   await expect(page.locator('h1')).toHaveText('Progetti ed Iniziative');
   await page.locator('.item-title a[href="rag-aziendale.html"]').click();
   await expect(page.locator('h1')).toHaveText('RAG');
  });
  test('hero Contattami opens the contact dialog',async({page})=>{
   await page.goto('/');
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
  test('language menu opens from the flag, lists the other two languages and closes with Esc or a choice',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('#langList')).toBeHidden();
   await page.locator('.lang-toggle').click();
   await expect(page.locator('#langList')).toBeVisible();
   await expect(page.locator('#langList .lang-btn:visible')).toHaveCount(2);
   await expect(page.locator('.lang-current')).toHaveText('IT');
   await page.keyboard.press('Escape');
   await expect(page.locator('#langList')).toBeHidden();
   await expect(page.locator('.lang-toggle')).toBeFocused();
   await page.locator('.lang-toggle').click();
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('#langList')).toBeHidden();
   await expect(page.locator('h1')).toHaveText('Projects and Initiatives');
  });
  test('with a mouse the language list opens on hover and the flag arrow invites to change language',async({page})=>{
   await page.goto('/progetti.html');
   await expect(page.locator('.lang-toggle .lang-chevron')).toBeVisible();
   await page.locator('.lang-toggle').hover();
   await expect(page.locator('#langList')).toBeVisible();
   await page.mouse.move(5,300);
   await expect(page.locator('#langList')).toBeHidden();
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
   const fits=await page.evaluate(()=>{const w=document.documentElement.clientWidth;return [...document.querySelectorAll('.topbar .lang-toggle,.topbar .menu-toggle')].every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=w&&r.height>=44})});
   expect(fits).toBe(true);
   await page.locator('.lang-toggle').click();
   await page.waitForTimeout(250);
   const listFits=await page.evaluate(()=>{const w=document.documentElement.clientWidth;return [...document.querySelectorAll('#langList .lang-btn:not(.on)')].every(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=w&&r.height>=44})});
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
   await page.goto('/');
   await expect(page.locator('.topbar-contact')).toHaveCount(0);
   await page.locator('.menu-toggle').click();
   await expect(page.locator('#siteMenu')).toBeVisible();
   await page.locator('#siteMenu .contact-trigger').click();
   await expect(page.locator('#contactDialog')).toBeVisible();
   await expect(page.locator('#siteMenu')).toBeHidden();
   await page.locator('#cmEmail .reveal-btn').click();
   await expect(page.locator('#cmEmail a')).toHaveText('nic.forcolin@gmail.com');
   await expect(page.locator('#cmEmail a')).toHaveAttribute('href','mailto:nic.forcolin@gmail.com');
   await page.locator('#cmPhone .reveal-btn').click();
   await expect(page.locator('#cmPhone a')).toHaveText('+39 347 908 1966');
   await page.keyboard.press('Escape');
   await expect(page.locator('#contactDialog')).not.toBeVisible();
  });
  test('home has no results, projects or contact sections: they are reached from the three links',async({page})=>{
   await page.goto('/');
   await expect(page.locator('.home-proof')).toHaveCount(0);
   await expect(page.locator('.home-projects')).toHaveCount(0);
   await expect(page.locator('.hero-cta-row .hero-link:visible')).toHaveCount(3);
   await expect(page.locator('.home-results-link')).toHaveAttribute('href','rag-aziendale.html#risultati');
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
   await expect(page.locator('.home-collab-faq details')).toHaveCount(5);
   await page.locator('.home-collab-faq summary').first().click();
   await expect(page.locator('.home-collab-faq details').first()).toHaveAttribute('open','');
  });
  test('home hero names me, introduces me and has no menu',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toContainText('Nicolò Forcolin');
   await expect(page.locator('#heroIntro')).toContainText('IT per le PA dal 2022, Tech Lover dal 1992.');
   await expect(page.locator('#heroIntro')).toContainText('assistenti AI che rispondono dai documenti aziendali, modelli che girano in casa');
   await expect(page.locator('#heroIntro')).not.toContainText('InfoCamere');
   await expect(page.locator('.desktop-nav')).toHaveCount(0);
   await expect(page.locator('.site-name')).toHaveText('NForcolin');
   await expect(page.locator('.site-name')).toHaveAttribute('aria-label','Nicolò Forcolin, home');
   await pickLang(page,'en');
   await expect(page.locator('#heroIntro')).toContainText('IT for public administration since 2022, tech lover since 1992.');
  });
  if(viewport.width<=700){
   test('on mobile the bar is always visible and the portrait sits above the greeting',async({page})=>{
    await page.goto('/');
    await expect(page.locator('.topbar')).toBeVisible();
    await expect(page.locator('.menu-toggle')).toBeInViewport();
    await expect(page.locator('.hero-portrait')).toBeVisible();
    const photo=await page.locator('.hero-portrait').boundingBox();
    const heading=await page.locator('#hero-name').boundingBox();
    expect(heading.y).toBeGreaterThanOrEqual(photo.y+photo.height-2);
    await expect(page.locator('#hero-name')).toBeInViewport();
   });
   test('on mobile the inline nav is hidden and the menu lists the pages',async({page})=>{
    await page.goto('/percorso.html');
    await expect(page.locator('.desktop-nav')).toBeHidden();
    await page.locator('.menu-toggle').click();
    await expect(page.locator('#siteMenu a[href="progetti.html"]')).toBeVisible();
    await expect(page.locator('#siteMenu a')).toHaveCount(3);
    await expect(page.locator('#siteMenu a[aria-current="page"]')).toHaveAttribute('href','percorso.html');
    await page.keyboard.press('Escape');
    await expect(page.locator('#siteMenu')).toBeHidden();
    await expect(page.locator('.menu-toggle')).toBeFocused();
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
