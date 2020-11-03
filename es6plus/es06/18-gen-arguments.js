#!/usr/bin/env node

const log = console.log;

/* es6 生成器函数的参数 */

function * gen(arg) {
  log(arg);
  let one = yield 111;
  log(one);

  let two = yield 222;
  log(two);

  let three = yield 333;
  log(three);
}

let iterator = gen('AAA');
log(iterator.next());
log(iterator.next('BBB'));
log(iterator.next('CCC'));
log(iterator.next('DDD'));
