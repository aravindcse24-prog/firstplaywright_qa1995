import {test as base} from '@playwright/test';

type auto={
    autoplay:string;
}

export const test=base.extend<auto,{}>({
    autoplay:[async({},use)=>{
        console.log("Aravind this test is started .....");
     await use("running");
          console.log("Aravind this test is done .....");
},{auto:true}]

});

