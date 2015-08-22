export let __hotReload = true;
import {_fetch} from './request';
import {Vigi} from './vigi';
import {HTTP} from './http';

 export const vigi = () => {
   //let http = new HTTP(_fetch);
   return new Vigi();
};

let test = vigi();


test.baseUrl = 'http://jsonplaceholder.typicode.com';
test.one('posts')

console.log(test.one('posts'));

test.one('posts').get().then(data => {
  console.log(data)
})

test.one('todos').get().then(data => {
  console.log(data)
})






