import{test} from '@playwright/test';

test("after each test",async()=>{
    console.log('test is afterall');
});
test("before sseach test",async()=>{
    console.log('test is before each');
});
test("before each test",async()=>{
    console.log('test is before');
});
test("before all each test",async()=>{
    console.log('test is before all');
});