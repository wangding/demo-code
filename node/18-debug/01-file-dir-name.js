#!/usr/bin/node
// 01-file-dir-name.js

console.log('file name:'__filename);
console.log('dir name:'__dirname);

process.on('uncaughtException', function(err) {
  console.log(err);
});
