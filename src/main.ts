export let __hotReload = true;

  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(target) {
        'use strict';
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }
  
        var to = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];
          if (nextSource === undefined || nextSource === null) {
            continue;
          }
          nextSource = Object(nextSource);
  
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
        return to;
      }
    });
  }

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
  data[1].put({title: 'steve', body: 'supa steve?'}).then(data => {
    console.log('put?', data)
  })
  data[0].get('comments').then(data => {
    console.log('chained!', data)
  })
})

test.one('todos').get().then(data => {
  console.log(data)
  console.log(data[0])
  data[0].get().then(data => {
    
  })
})




