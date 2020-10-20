/* 面向对象封装 */

let log = console.log;

function Cat(name) {
  this.name = name;
  this.eat  = () => log(this.name + ' eat something');
};

let catA = new Cat('xiaoA'),
    catB = new Cat('xiaoB'),
    catC = new Cat('xiaoC');

catA.eat();
catB.eat();
catC.eat();