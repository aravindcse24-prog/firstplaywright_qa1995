import { test, expect } from '@playwright/test';

test('iframe test', async ({ page }) => {

  await page.goto('https://www.qa-practice.com/elements/iframe/iframe_page');

  // 🔹 Switch to iframe
  const frame = page.frameLocator('.embed-responsive-item');

  // 🔹 Get text inside iframe
  const text = await frame.locator('.fw-light').textContent();

  console.log('Text inside iframe:', text);

});