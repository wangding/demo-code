#!/usr/bin/env node

const log = console.log;

/* es6 扩展运算符 */

// [...] 扩展运算符，将数组转换为逗号分隔的参数序列

let arr = [1, 2, 3];

function fn() {
  log(arguments);
}

fn(arr); // 实参数量为 1
fn(...arr); // 实参数量为 3

// 跟 rest 参数很像，但是截然相反
// rest 的 ... 放到形参的位置
// 扩展运算符的 ... 放到实参的位置

// 扩展运算符的使用场景
// 1. 数组的合并
const arr1 = [1, 2], arr2 = [3, 4];

log(arr1.concat(arr2));   // es5
log([...arr1, ...arr2]);  // es6

// 2. 数组克隆
const arr3 = [5, 6, 7];
const arr4 = [...arr3];

log(arr4);

// 3. 将对象数组，转为真正的数组
function fn() {
  log(arguments);
  log([...arguments]);
}

fn(1, 2, 3);
