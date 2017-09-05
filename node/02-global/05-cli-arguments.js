#!/usr/bin/node
// 05-cli-arguments.js
// usage: 
//   ./05-cli-arguments.js "2+4"
//   ./05-cli-arguments.js "Math.pow(2,4)"
//   ./05-cli-arguments.js "Math.sin(Math.PI/2)"

var argv = process.argv;
console.log('arguments:', argv);

var expression = argv[2];
console.log(expression + '=%d', eval(expression));
