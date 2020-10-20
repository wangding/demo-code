/* 封装 */

let log = console.log;

let catA = {
  name: 'xiaoA',
  eat : () => log('xiaoA eat something')
};

let catB = {
  name: 'xiaoB',
  eat : () => log('xiaoB eat something')
};

let catC = {
  name: 'xiaoC',
  eat : () => log('xiaoC eat something')
};

catA.eat();
catB.eat();
catC.eat();

/* 问题：catA, catB, catC 有大量重复代码，可以重新封装 */