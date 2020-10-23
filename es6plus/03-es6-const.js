#!/usr/bin/env node

/* es6 const 常量 */

// 声明常量
const school = 'edu2act';

console.log(school);

// 1. 一定要赋初始化值
// const a;
// console.log(a);

// 2. 常量的变量名一般用大写
const PI = 3.14;
console.log(PI);

// 3. 常量的值不能修改
// PI = 2.14;
// console.log(PI);

// 4. const 也是块级作用域
// {
//   const NAME = 'wangding';
// }
// console.log(NAME);

// 5. 对于数组和对象的修改，不算做对常量的修改，因为引用地址没变
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// arr = 0;
// console.log(arr);
