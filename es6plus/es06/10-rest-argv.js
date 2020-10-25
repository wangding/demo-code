#!/usr/bin/env node

const log = console.log;

/* es6 rest 参数 */

// es6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

// es5
function data1() {
  log(arguments);    // 对象数组
}

data1(1, 2, 3);

// es6 rest argument
function data2(...arg) {
  log(arg);          // 数组，可以使用数组的 api，例如：filter, map, reduce, ...
}

data2(1, 2, 3);

// 注意
// 1. rest 参数必须放到，形参列表的最后
function fn(a, b, ...args) {
  log(a);
  log(b);
  log(args);
}

fn(1, 2, 3, 4, 5, 6);
