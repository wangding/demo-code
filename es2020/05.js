/* es2020 新特性 */

// Promise.allSettled 对 Promise.all 改进，一个 Promise 失败，不会导致终止

// globalThis  if web env globalThis is window, if node env globalThis is global

// 可选链式调用 let obj = {}; obj.a.b;  obj.a is undefined , obj.a.b b is not attribue
// obj.a?.b  b is undefined