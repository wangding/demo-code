/* 工厂模式进行封装 */

let log = console.log;

function createCat(name) {
  let obj = {};
  obj.name = name;
  obj.eat  = () => log(obj.name + ' eat something');

  return obj;
};

let catA = createCat('xiaoA'),
    catB = createCat('xiaoB'),
    catC = createCat('xiaoC');

catA.eat();
catB.eat();
catC.eat();