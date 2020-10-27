#!/usr/bin/env node

const log = console.log;

/* es6 symbol 创建对象属性 */

// 向对象中添加方法 up down
let game = {
  name: '俄罗斯方块',
  up() {},
  down() {}
};

//game.up = () => {};   // 有风险，不知道 game 中是否有 up 方法

// 声明一个对象
let methods = {
  up: Symbol(),
  down: Symbol()
};

game[methods.up] = () => log('我可以改变形状');
game[methods.down] = () => log('我可以快速下降');

log(game);

game[methods.up]();
game[methods.down]();

let say = Symbol('say'),
    zibao = Symbol('zibao');

let youxi = {
  name: '狼人杀',
  [say]: () => log('我可以发言'),
  [zibao]: () => log('我可以自爆')
}

log(youxi);
youxi[say]();
youxi[zibao]();
