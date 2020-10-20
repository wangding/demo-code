/* new 的工作原理 */

let log = console.log;

function Cat(name) {
  this.name = name;
}

let catA = new Cat('xiaoA');

log(catA);

/* 
new 做了那些事情：
1. 创建了一个空对象 {}
2. 将构造函数的 prototye 属性赋值给了新对象的 __proto__ 属性
3. 将构造函数的 this 指向新对象
4. 执行构造函数
5. 返回新对象
*/

let catB = (()=> {
  let obj = {};
  obj.__proto__ = Cat.prototye;
  Cat.call(obj, 'xiaoB');
  return obj;
})();

log(catB);