#!/usr/bin/node

console.log('I am child process. PID:', process.pid);

var timer = global.setInterval(function() {
  console.log('I am child process. ');
}, 1000);


setTimeout(function(){
  global.clearInterval(timer);
  console.log('10 seconds passed. Child game over!');
}, 10000);
