#!/usr/bin/node

var cp = require('child_process');

var child = cp.fork('./02-child.js');

child.on('message', function(msg) {
  console.log('I am father, my PID:', process.pid);
  console.log('msg from child:', msg);
});

child.send('I am father.');


