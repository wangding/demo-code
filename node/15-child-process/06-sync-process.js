#!/usr/bin/node

var cp = require('child_process');

//cp.spawn('./06-child.js', [], {stdio: ['ignore', 1, 2]});
cp.spawnSync('./06-child.js', [], {stdio: ['ignore', 1, 2]});

console.log('I am facther process. PID:', process.pid);
