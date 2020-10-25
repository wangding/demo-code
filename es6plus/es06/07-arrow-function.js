#!/usr/bin/env node

const log = console.log;

/* es6 箭头函数 */

// 声明函数

// es5
var pow = function(x, y) {
  return x + y;
};

// es6 arrow function
let sum = (x, y) => {
  return x + y;
};

log(`5 + 3 = ${pow(5, 3)}`);
log(`3 + 6 = ${sum(3, 6)}`);

// 箭头函数的特性
// 1. this 是静态的，this 始终指向函数声明时所在作用域下的 this
let a = {
  name: 'wangding',

  getName1: function() {
    log(this);
  },

  getName2: () => {
    log(this);
  }
};

a.getName1();  // 对象作用域
a.getName2();  // 模块作用域
a.getName1.apply(this);  // 动态切换模块作用域

// 2. 箭头函数不能作为构造函数，实例化对象
// 下面代码是错误的
// let Person = (name, age) => {
//   this.name = name;
//   this.age  = age;
// };
// 
// let me = new Person('wangding', 42);
// log(me);

// 3. 箭头函数不支持 arguments 参数
let fn1 = function() {
  log(arguments);
};

let fn2 = () => {
  log(arguments);
};

fn1(1, 2);
fn2(1, 2, 3);

// 4. 箭头函数的简写
// 4.1 省略小括号，当形参有且只有一个时
let pow1 = (n) => { return n * n; };
log(pow1(9));

let pow2 = n => { return n * n; };
log(pow2(9));

// 4.2 省略花括号，当函数体只有一条语句时，连 return 也省略
let pow3 = n => n * n;
log(pow3(9));
