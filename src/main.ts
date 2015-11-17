export let __hotReload = true;

import {Vigi} from './vigi';

 export const vigi = (baseUrl: string) => {
   return new Vigi(baseUrl);
};

//let test = vigi('http://jsonplaceholder.typicode.com');
//let test = vigi('http://demo2581276.mockable.io')
let test = vigi('http://testydemo.getsandbox.com')
console.log(test)

//test.one('posts')

console.log(test)

test.one('users').post({username: 'stealthyCat', firstName: 'steve'}).then(data => {
  console.log(data)
  
  data.get().then(resp => {
    console.log(resp)
  })
})



