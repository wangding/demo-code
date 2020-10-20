/* 对象继承改进 */

let log = console.log;

function A(name) {
  this.name = name;
  this.list = [1, 2, 3];
}

A.prototype.getName = function() { return this.name; };

function SubA(name) {
  A.call(this, name);                 // 执行父类构造函数
  this.subName = 'sub' + this.name;
}

//SubA.prototype = new A();           // old code change to below
SubA.prototype = A.prototype;         // 继承父类的原型链方法

let sa1 = new SubA('sa1');
log(sa1);