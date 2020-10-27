#!/usr/bin/env node

const log = console.log;

/* es6 iterator 迭代器 */

// 迭代器为不同的数据结构提供统一的访问机制
// 任何数据结构只要部署 iterator 接口，就可以完成遍历操作
// es6 提供 for of 循环，iterator 接口提供 for...of 消费
// 原生具备 iterator 接口的数据类型（可以 for...of 遍历）
// Array, Arguments, Set, Map, String, TypedArray, NodeList

let xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

for(let v of xiyou) log(v);
//for(let v in xiyou) log(v);

let iterator = xiyou[Symbol.iterator]();
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());
