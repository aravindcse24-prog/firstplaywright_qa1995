import { test, expect} from '../fixture/fixture';

test('get test',async({loginPage})=>{

  await expect(
    loginPage.getByRole('heading', { name: 'Logged In Successfully' })
  ).toBeVisible();

});

test('login out', async ({ loginPage }) => {
  await loginPage.goto('https://practicetestautomation.com/logged-in-successfully/');
  await loginPage.getByText('Log out').click();
});