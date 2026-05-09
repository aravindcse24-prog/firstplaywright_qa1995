import {test,expect} from '@playwright/test';

test('Form test',async({page})=>{

await page.goto('https://www.qa-practice.com/elements/select/single_select');
/*await expect(page).toHaveTitle(/QA Practice/);

await page.getByRole('textbox',{name:'First Name'}).fill('aravind');
await page.getByRole('textbox',{name:'Last Name'}).fill('Kumar');
await page.getByPlaceholder('name@example.com').fill('aravindcse24@gmail.com');
await page.locator('#gender_0').click();
await page.getByPlaceholder('Mobile Number').fill('9600190494');
await page.locator('#gender_0').click();
await page.getByLabel('Sports');
await page.locator('#uploadPicture').setInputFiles('D:/playwright/playwright-project/test-data/pic.jpg');
//await page.waitForTimeout(60000); // 60 seconds*/
await page.locator('#id_choose_language');
const drop=await page.selectOption('#id_choose_language', 'Java', { timeout: 60000 });
console.log("java choosed"+" "+drop );
await page.waitForTimeout(10000); // 60 seconds

});