#!/usr/bin/env node

const log = console.log;

/* es6 promise 异步操作 */

const fs = require('fs');

const p = new Promise((resolve, reject) => {
  fs.readFile('./01-let.js', (err, data) => {
    if(err) reject(err.message);
    resolve(data.toString('utf8'));
  });
});

p.then((value) => {
  log(value);
}, (reason) => {
  log(reason);
});
