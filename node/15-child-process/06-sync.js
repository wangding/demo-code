#!/usr/bin/node

var cp = require('child_process');

//var child = cp.spawn('./02-child.js', [], {stdio: ['ignore', 1, 2]});
cp.spawnSync('./02-child.js', [], {stdio: ['ignore', 1, 2]});

console.log('I am facther process. PID:', process.pid);
