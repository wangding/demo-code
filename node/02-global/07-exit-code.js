#!/usr/bin/node
// 06-exit-code.js
// usage:
//   ./06-exit-code.js 0
//   echo $?
//   ./06-exit-code.js 2
//   echo $?

console.log('arguments:', process.argv);
console.log('exit code:', process.argv[2]);

process.exit(process.argv[2]);

