const {test,expect}=require('@playwright/test');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  test('layout and hero essentials',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#hero-name')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   await expect(page.locator('.hero-filmstrip')).toBeVisible();
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2)).toBeTruthy();
  });
  test('filmstrip and hero CTA open the matching dialog',async({page})=>{
   await page.goto('/');
   await page.locator('.hero-btn[href="#casi-studio"]').click();
   const ragDialog=page.locator('#casi-studio');
   await expect(ragDialog).toBeVisible();
   await ragDialog.locator('.dialog-close').click();
   await expect(ragDialog).not.toBeVisible();
   await page.locator('.filmstrip-tile[href="#local-ai"]').click();
   await expect(page.locator('#local-ai')).toBeVisible();
  });
  test('dialog closes with Escape',async({page})=>{
   await page.goto('/');
   await page.locator('.filmstrip-tile[href="#esperienze"]').click();
   const dialog=page.locator('#esperienze');
   await expect(dialog).toBeVisible();
   await page.keyboard.press('Escape');
   await expect(dialog).not.toBeVisible();
  });
  test('deep link opens the matching dialog on load',async({page})=>{
   await page.goto('/#local-ai');
   await expect(page.locator('#local-ai')).toBeVisible();
  });
  test('language switching preserves project copy',async({page})=>{
   await page.goto('/');
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('[data-i18n="case1_title"]').first()).toHaveText('Enterprise Knowledge Retrieval');
   await page.locator('[data-lang="it"]').click();
   await expect(page.locator('[data-i18n="case1_title"]').first()).toHaveText('RAG aziendale');
  });
  test('dark theme and portrait loading',async({page})=>{
   await page.goto('/');
   await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
   await expect(page.locator('.theme-toggle')).toHaveCount(0);
   const image=page.locator('#avatarPhoto');
   await expect(image).toHaveJSProperty('complete',true);
   expect(await image.evaluate(el=>el.naturalWidth)).toBeGreaterThan(0);
  });
  test('contacts open in a dialog, not LinkedIn',async({page})=>{
   await page.goto('/');
   await page.locator('.contact-trigger').first().click();
   await expect(page.locator('#contactDialog')).toBeVisible();
   await expect(page.locator('#cmEmail .reveal-btn')).toBeVisible();
   await page.keyboard.press('Escape');
   await expect(page.locator('#contactDialog')).not.toBeVisible();
  });
  test('no page errors when opening every dialog',async({page})=>{
   const errors=[];page.on('pageerror',error=>errors.push(error.message));
   await page.goto('/');
   for(const id of ['casi-studio','local-ai','esperienze']){
    await page.locator('.filmstrip-tile[href="#'+id+'"]').click();
    await expect(page.locator('#'+id)).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#'+id)).not.toBeVisible();
   }
   expect(errors).toEqual([]);
  });
  if(viewport.width<=700){
   test('mobile nav opens via the toggle and links work',async({page})=>{
    await page.goto('/');
    const navLink=page.locator('.desktop-nav a[href="#casi-studio"]');
    await expect(navLink).toBeHidden();
    await page.locator('.nav-toggle').click();
    await expect(navLink).toBeVisible();
   });
  }
 });
}
