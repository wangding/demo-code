#!/usr/bin/env node

const log = console.log;

/* es6 const 常量 */

// 声明常量
const school = 'edu2act';

log(school);

// 1. 一定要赋初始化值
// const a;
// log(a);

// 2. 常量的变量名一般用大写
const PI = 3.14;
log(PI);

// 3. 常量的值不能修改
// PI = 2.14;
// log(PI);

// 4. const 也是块级作用域
// {
//   const NAME = 'wangding';
// }
// log(NAME);

// 5. 对于数组和对象的修改，不算做对常量的修改，因为引用地址没变
const arr = [1, 2, 3];
arr.push(4);
log(arr);

// arr = 0;
// log(arr);
