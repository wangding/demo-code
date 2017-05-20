#!/usr/bin/env node

console.log('hello world');

console.log(process.argv.length -2);

for(var i=2; i<process.argv.length; i++) {
  console.log("argv[" + i + "]", process.argv[i]);
}
