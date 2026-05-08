import {test,expect} from '@playwright/test';
import { Loginpage } from '../pages/login';

test("testing the login page",async({page})=>{

    const loginpage=new Loginpage(page);
    await loginpage.loginurl();
    await loginpage.logindata('student','Password123');
console.log('completed....');

});