#!/usr/bin/env node
var cmd = process.argv[2];
var exec = require('child_process').exec;

var ans = exec(cmd, function(error, stdout, stderr) {
  if(error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);;
  }

  console.log('Child Process STDOUT: ' + stdout);
});

console.log('hello world');
