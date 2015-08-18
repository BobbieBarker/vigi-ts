export let __hotReload = true;

import {Vigi} from './vigi';
import {HTTP} from './http';

 export const vigi = () => {
   let http = new HTTP();
   return new Vigi(http);
};

let test = vigi();


//test.baseUrl = 'http://jsonplaceholder.typicode.com';

var dumby = new Request('http://jsonplaceholder.typicode.com', {method: 'GET'})
console.log(dumby)


console.log(test);


