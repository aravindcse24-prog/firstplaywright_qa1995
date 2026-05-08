import {test,expect, request} from '@playwright/test';

test('get request',async({request})=>{

const res =await request.get('https://jsonplaceholder.typicode.com/posts/1');
console.log(await res.json());
expect(res.status()).toBe(200);
const body =await res.json();
expect(body.id).toBe(1);
 expect(body.userId).toBe(1);

});

test('get post',async({request})=>{
const response =await request.post('https://jsonplaceholder.typicode.com/posts/',
    {data:{ title: 'test',
     body: 'playwright api',
     userId: 1}});

     const body1=await response.json();
     expect(response.status()).toBe(201);

      expect(body1.title).toBe('test');


});
