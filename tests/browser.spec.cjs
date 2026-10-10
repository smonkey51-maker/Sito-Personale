const {test,expect}=require('@playwright/test');
const sizes=[{name:'mobile',width:375,height:812},{name:'tablet',width:768,height:1024},{name:'desktop',width:1440,height:900}];
for(const viewport of sizes){
 test.describe(viewport.name,()=>{
  test.use({viewport:{width:viewport.width,height:viewport.height}});
  test('layout and essential navigation',async({page})=>{
   await page.goto('/');
   await expect(page.locator('#casi-studio')).toBeVisible();
   await expect(page.locator('#local-ai')).toBeVisible();
   await expect(page.locator('#avatarPhoto')).toBeVisible();
   await expect(page.locator('.system-map')).toHaveCount(2);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2)).toBeTruthy();
   await page.locator('a[href="#casi-studio"]').first().click();
   await expect(page).toHaveURL(/#casi-studio$/);
  });
  test('case dialog opens and closes with keyboard',async({page})=>{
   await page.goto('/');
   const summary=page.locator('.case-reader > summary').first();
   await summary.click();
   const dialog=page.locator('dialog.project-reader');
   await expect(dialog).toBeVisible();
   await page.keyboard.press('Escape');
   await expect(dialog).not.toBeVisible();
  });
  test('language switching preserves project copy',async({page})=>{
   await page.goto('/');
   await page.locator('[data-lang="en"]').click();
   await expect(page.locator('[data-i18n="rag_map_title"]')).toHaveText('How the system evolved');
   await page.locator('[data-lang="fr"]').click();
   await expect(page.locator('[data-i18n="rag_map_title"]')).toHaveText('Évolution du système');
   await page.locator('[data-lang="it"]').click();
   await expect(page.locator('[data-i18n="rag_map_title"]')).toHaveText('Come si è evoluto il sistema');
  });
  test('no page errors and accessible disclosure',async({page})=>{
   const errors=[];page.on('pageerror',error=>errors.push(error.message));
   await page.goto('/');
   const disclosure=page.locator('.system-insight').first();
   await disclosure.locator('summary').click();
   await expect(disclosure).toHaveAttribute('open','');
   expect(errors).toEqual([]);
  });
 });
}
