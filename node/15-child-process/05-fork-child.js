#!/usr/bin/node

var cp = require('child_process');

process.on('message', function(msg) {
  console.log('I am child, my PID:', process.pid);
  console.log('msg from father:', msg);
});

process.send('hello! I am child.');
