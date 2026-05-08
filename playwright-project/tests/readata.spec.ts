import { test, expect } from '@playwright/test';
import { readExcel, writeExcel } from '../utils/testdata';

test('Read & Write Excel in Playwright', async ({ page }) => {

  const filePath = 'D:/playwright/playwright-project/test-data/data.xlsx';
  const sheetName = 'Sheet1';

  // ✅ Read data inside test
  const testData: any[] = readExcel(filePath, sheetName);

  for (let i = 0; i < testData.length; i++) {

    const data = testData[i];

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', data.username);
    await page.fill('#password', data.password);
    await page.click('#submit');

    try {
      await expect(page.locator('h1')).toHaveText('Logged In Successfully');
      testData[i].result = 'PASS';
    } catch (error) {
      testData[i].result = 'FAIL';
    }

    // Optional: reset for next iteration
    await page.waitForTimeout(1000);
  }

  // ✅ Write results back to Excel
  writeExcel(filePath, sheetName, testData);

});