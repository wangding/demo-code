// 类型判断的柯里化

console.log(isType('123', 'String'));
console.log(isType([], 'String'));

function isType(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

// 把 isType 方法细化为：isArray, isString，把两个参数变成一个参数

function isType2(type) {
  return function(value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  }
}

let isString = isType2('String');
let isArray  = isType2('Array');

console.log(isString('123'));
console.log(isString([]));
console.log(isArray([]));

// 通用的 currying

function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

console.log(sum(1,2,3,4,5,6));

// 改成
// let sum = currying(sum)(1, 2)(3, 4)(5)(6)

function currying(fn, arr=[]) {
  let len = fn.length;

  return function(...arg) {
    arr = [...arr, ...arg];
    if(arr.length < len) {
      return currying(fn, arr);
    } else {
      return fn(...arr);
    }
  }
}

let sum2 = currying(sum)(1,2)(3,4)(5)(6);
console.log(sum2);
