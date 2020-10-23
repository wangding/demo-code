#!/usr/bin/env node

/* es6 let */

let a;
let b, c, d;
let e = 100;
let f = 43, g = 'i love you', h = [];

// 1. let 变量不能重复声明，var 变量可以重复声明
let star = '罗志祥';
// let star = '小猪';

// 2. 块级作用域，全局作用域，函数作用域，eval 作用域
// 变量只在代码块内有效，出了代码块就无效了，包括：if, else, while, for，等代码块
for(let i=0; i<4; i++) {
  console.log(i);
}
//console.log(i);    // ReferenceError: i is not defined

//{
//  let girl = '周扬青';
//}
//console.log(girl); // ReferenceError: girl is not defined

// 3. 不存在变量提升
//console.log(song);
//let song = '恋爱达人';

// 4. 不影响作用域链
{
  let school = 'edu2act';
  function fn() {
    console.log(school);
  }
  fn();
}
