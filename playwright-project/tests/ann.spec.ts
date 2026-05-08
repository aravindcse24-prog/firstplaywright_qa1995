import { test} from '@playwright/test';

test.skip('Login test-1', async ({ page }) => {
console.log('test =1'); 
});
test.fixme('Login test-2', async ({ page }) => {
console.log('test=2'); 
});
test.fail('Login test-3', async ({ page }) => {
console.log('test=3'); 
});
test('rrr', async ({ page }) => {
test.slow();

console.log('test=8'); 
});

test.skip('aravind Login test-4444', async ({ page }) => {
console.log('only this test will run hello'); 
});

