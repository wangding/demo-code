#!/usr/bin/env node

const log = console.log;

/* es6 symbol 内置属性 */

class Person{
  static [Symbol.hasInstance](arg) {
    log(arg);
    log('我被用来检查类型了');
    return true;
  }
}

let o = {};

log(o instanceof Person);

const arr = [1, 2, 3],
      arr2 = [4, 5, 6];

// log(arr.concat(arr2));

arr2[Symbol.isConcatSpreadable] = false;
log(arr.concat(arr2));
