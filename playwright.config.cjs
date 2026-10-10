const {defineConfig}=require('@playwright/test');
module.exports=defineConfig({
 testDir:'./tests',testMatch:'browser.spec.cjs',timeout:30000,retries:1,
 use:{baseURL:'http://127.0.0.1:4173',browserName:'chromium',trace:'retain-on-failure',screenshot:'only-on-failure'},
 webServer:{command:'node tests/serve.cjs',url:'http://127.0.0.1:4173',reuseExistingServer:!process.env.CI,timeout:15000}
});
