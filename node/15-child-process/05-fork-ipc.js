#!/usr/bin/node

var cp = require('child_process');

console.log('I am father proces. PID:', process.pid);

var child = cp.fork('./05-fork-child.js');

child.on('message', function(msg) {
  console.log('msg from child:', msg);
});

setTimeout(function() {
  child.send('I am father process. PID: ' + process.pid);
}, 2000);


