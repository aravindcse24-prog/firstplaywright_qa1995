import { test } from '@playwright/test';

test('Login test', async ({ page }) => {

  await page.goto(process.env.Base_url!);

  const currentUrl = page.url();

  console.log('Current URL:', currentUrl);
});