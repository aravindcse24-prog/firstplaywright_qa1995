import { test, expect } from '@playwright/test';

test('alert box test', async ({ page }) => {
await page.goto('https://www.qa-practice.com/elements/alert/alert#');
  page.on('dialog', async dialog => {
    console.log(dialog.message()); // alert text
    await dialog.accept(); // click OK
  });
  await page.locator('.a-button').click();
});

test('confirm box test', async ({ page }) => {
await page.goto('https://www.qa-practice.com/elements/alert/confirm');
  page.on('dialog', async dialog => {
    console.log(dialog.message()); // alert text
    await dialog.accept(); // click OK
  });
  await page.locator('.a-button').click();
});

test('prompt box test', async ({ page }) => {
await page.goto('https://www.qa-practice.com/elements/alert/prompt');
  page.on('dialog', async dialog => {
    console.log(dialog.message()); // alert text
    await dialog.accept('aravind'); // click OK
  });
  await page.locator('.a-button').click();
});


test('alternativa handle',async({page})=>{
await page.goto('https://www.qa-practice.com/elements/alert/prompt');
const dailogPromise= await page.waitForEvent('dialog');
await page.locator('.a-button').click();
const dialog= await dailogPromise;
console.log(dialog.message());
});

