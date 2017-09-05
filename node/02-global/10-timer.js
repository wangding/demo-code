#!/usr/bin/node
// 09-timer.js

//var count = 0;
var timer;

console.log('start...');

timer = setInterval(loop, 500);
timer.unref();

function loop() {
  //count++;
  console.log('i will loop forever! times:', Date.now());
/*
  if(count === 10) {
    global.clearInterval(timer);
    console.log('enough! good bye!');
  }
*/
}

setTimeout(function() {
  console.log('Game over!');
}, 5000);
