export let __hotReload = true;

import {Vigi} from './vigi';
import {HTTP} from './http';

 export const vigi = () => {
   let http = new HTTP();
   return new Vigi(http);
};

let test = vigi();


//test.baseUrl = 'http://jsonplaceholder.typicode.com';

console.log(test);


