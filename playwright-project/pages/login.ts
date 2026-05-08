import {Page} from '@playwright/test';

export class Loginpage{
    page:Page;

    constructor(page:Page){
        this.page=page;
 }
  username='#username';
  password='#password';
  sum='#submit';

  async loginurl(){
await this.page.goto('https://practicetestautomation.com/practice-test-login/');
     
  }

  async logindata(user:string,pass:string){
     await this.page.fill(this.username,user);
     await this.page.fill(this.password,pass);
     await this.page.click(this.sum);
     console.log('here');

  }



}