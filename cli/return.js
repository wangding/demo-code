#!/usr/bin/env node

var code = process.argv[2];

console.log('hello world');
if(code === 'ok') {
  process.exit(0);
}
else if(code == 'err') {
  process.exit(1);
}
else {
  process.exit(2);
}
