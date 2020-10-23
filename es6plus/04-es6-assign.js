#!/usr/bin/env node

/* es6 变量解构赋值 */

// 1. 数组解构
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝'];
let [xiao, liu, zhao, song] = F4;

console.log(xiao);
console.log(liu);
console.log(zhao);
console.log(song);

// 2. 对象解构
const zbs = {
  name: '赵本山',
  age:  '不详',
  xiaopn: function() { console.log('我可以演小品'); }
};

let {name, xiaopn} = zbs;

console.log(name);
xiaopn();
