#!/usr/bin/env node

const log = console.log;

/* es6 生成器 */

// 生成器是一个特殊的函数
// 他用来做异步编程
// yield 相当于分隔符

function * gen() {      // 声明特殊
  //log('hello generator');
  log('111');
  yield '一只没有耳朵';

  log('222');
  yield '一只没有尾巴';

  log('333');
  yield '真奇怪';

  log('444');
}

let iterator = gen();   // 执行上特殊
//log(iterator);
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());

// 遍历
//for(let v of gen())   log(v);
