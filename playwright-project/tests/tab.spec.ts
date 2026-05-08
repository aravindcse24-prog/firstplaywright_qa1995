import { test, expect } from '@playwright/test';

test('new tab',async({page})=>{
await page.goto('https://www.qa-practice.com/elements/new_tab/link');

const[newPage]= await Promise.all([
page.context().waitForEvent('page'),page.click('#new-page-link')
]);

await newPage.waitForLoadState();

 console.log(await newPage.title());

}
);