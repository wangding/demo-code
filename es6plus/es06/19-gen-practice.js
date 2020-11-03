#!/usr/bin/env node

const log = console.log;

/* es6 生成器函数实战 */

// 需求：
// 1s 后输出 111，2s 后输出 222，3s 后输出 333

/* callback hell
setTimeout(() => {
  log(111);

  setTimeout(() => {
    log(222);

    setTimeout(() => {
      log(333);

    }, 3000);
  }, 2000);
}, 1000);
*/

function one() {
  setTimeout(() => {
    log(111);
    iterator.next();
  }, 1000);
}

function two() {
  setTimeout(() => {
    log(222);
    iterator.next();
  }, 2000);
}

function three() {
  setTimeout(() => {
    log(333);
  }, 3000);
}

function * gen() {
  yield one();
  yield two();
  yield three();
}

let iterator = gen();
iterator.next();
