export let __hotReload = true;

import {Vigi} from './vigi';

 export const vigi = (baseUrl: string) => {
   return new Vigi(baseUrl);
};

let test = vigi('http://jsonplaceholder.typicode.com');

console.log(test)

//test.one('posts')

console.log(test)

test.one('posts').get().then(data => {
  console.log(data)
  data[1].put({title: 'steve', body: 'supa steve?'}).then(data => {
   // console.log('put?', data)
  })
  data[0].get('comments').then(data => {
    console.log('chained!', data)
  })
})

/*test.one('todos').get().then(data => {
  console.log(data)
  console.log(data[0])
  data[0].get().then(data => {
    
  })
})*/




