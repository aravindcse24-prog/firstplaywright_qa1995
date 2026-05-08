import { test, expect } from '@playwright/test';

const users=[{user:'student',pass:'Password123'},
    {user:'student1',pass:'Password123'},
    {user:'student2',pass:'Password123'}
];
users.forEach((data) => {

  test(`login testing for ${data.user}`, async ({ page })=>{
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.fill('#username',data.user);
await page.fill('#password',data.pass);
await page.click('#submit');
console.log("first");

} );
});