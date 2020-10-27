#!/usr/bin/env node

const log = console.log;

/* es6 symbol 数据类型 */

// symbol 是一个新的原始的数据类型，symbol 表示独一无二的值。
// symbol 是一种类似字符串的数据类型
// symbol 的特点：
// 1. symbol 的值是唯一的，可以用来解决命名冲突的问题
// 2. symbol 的值不能与其他数据进行运算，例如：四则运算，字符串拼接，等
// 3. symbol 定义的对象的属性不能使用 for...in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

// 创建 symbol
let s = Symbol();
log(s, typeof s);  // 唯一性，值看不到

let s2 = Symbol('wangding'); // 字符串是描述字符串
let s3 = Symbol('wangding');
log(s2 === s3);

// Symbol.for 方法创建
let s4 = Symbol.for('wangding');
let s5 = Symbol.for('wangding');
log(s4, typeof s4);
log(s4 === s5);
log(s2.description);

// 不能与其他数据进行运算
//let result = s + 100;
//let result = s > 100;
//let result = s + '100';
// let result = s + s;
//log(result);

// 七种数据类型，USONB，you are so niubility
// u undefined
// s string symbol
// o object
// n null number
// b boolean
