import { chromium } from "@playwright/test";

async function globalSetup(){

    const browser =await chromium.launch();

const page = await browser.newPage();
 await page.goto('https://example.com/login');
 await page.fill('#username', 'user');
 await page.fill('#password', 'password');
 await page.click('#login');

 await page.context().storageState({path:'storageState.json'})

 await browser.close();

}export default globalSetup;
