import{test as base, Page, expect} from '@playwright/test';
type fixture={
loginPage:Page
}
export const test=base.extend<fixture>({
loginPage:async({page},use)=>{
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.fill('#username','student');
await page.fill('#password','Password123');
await page.click('#submit');
await use(page);
console.log('teardown');

},

});
export { expect }; 