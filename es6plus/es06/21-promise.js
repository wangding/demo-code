#!/usr/bin/env node

const log = console.log;

/* es6 promise 异步操作 */

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let data = 'user data from db';
    // resolve(data);
    let err = 'something wrong';
    reject(err);
  }, 1000);
});

p.then((value) => {
  log(value);
}, (reason) => {
  log(reason);
});
