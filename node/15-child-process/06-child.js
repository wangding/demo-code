#!/usr/bin/node

var cp = require('child_process');

setTimeout(function() {
  console.log('I am child process. PID:', process.pid);
}, 4000);
