#!/usr/bin/node

// usage: 
//   cat 01-stdin-stdout.js | ./01-stdin-stdout.js
//    (echo 'hello';sleep 2;echo 'world') | ./01-stdin-stdout.js

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
  process.stdout.write(data.toUpperCase());
})
