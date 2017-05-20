#!/usr/bin/env node
var cmd = process.argv[2];
var shelljs = require('shelljs');

shelljs.exec(cmd);
console.log('hello world');
