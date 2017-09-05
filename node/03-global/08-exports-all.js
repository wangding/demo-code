#!/usr/bin/node
// 07-exports-all.js
//
// 正宗的玩法：
//   把 07-exports-function、07-exports-var 和 07-exports-object 三个文件放到一个目录中 test 中，
//   把 07-exports-all.js 也放到 test 目录中，并且命名为 index.js
//
//   require('./test');   直接写目录的名字就可以把一组相关模块引用进来

module.exports = {
  circle : require('./07-exports-function'),
  pi : require('./07-exports-var'),
  Circle : require('./07-exports-object')
}

console.log('\n07-exports-all\n', module);
