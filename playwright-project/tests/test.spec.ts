import { test, expect } from '@playwright/test';

test('Test 1 - Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  console.log('Running Test 1');
  await expect(page).toHaveTitle(/Google/);
});

test('Test 2 - Open Example', async ({ page }) => {
  await page.goto('https://example.com');
  console.log('Running Test 2');
  await expect(page).toHaveTitle(/Example/);
});

test('Test 3 - Open Bing', async ({ page }) => {
  await page.goto('https://www.bing.com');
  console.log('Running Test 3');
  await expect(page).toHaveTitle(/Bing/);
});