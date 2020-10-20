/* 继承 */

let log = console.log;

function Cat(name) {
  this.name = name;
  this.eat  = () => log('abc');   // 这个 eat 方法会屏蔽原型链中的 eat 方法，就近原则
}

Cat.prototype.eat = function(something) { log(this.name + ' eat ' + something); }

// error 箭头函数让 this 静态化了，不适合用于对象的方法
// Cat.prototype.eat = (something) => log(this.name + ' eat ' + something);

let catA = new Cat('xiaoA');
catA.eat('fish');
log(catA);