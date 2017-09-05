#!/usr/bin/node
// 09-timer.js

var count = 0;
var timer;

setTimeout(function() {
  console.log('first');
}, 1000);

console.log('second');


function Bomb() {
  this.message = 'Bomb!';
}

Bomb.prototype.explode = function() {
  console.log(this.message);
}

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb), 2000);

global.clearTimeout(timeID);
