#!/usr/bin/node
// 02-encode.js

var name = process.argv[2];
var passwd = process.argv[3];

console.log('name:', name);
console.log('passwd:', passwd);

var buf = new Buffer(name + ':' + passwd);

console.log('user name and password:', buf.toString());
console.log('user name and password with base64:', buf.toString('base64'));
console.log('user name and password with hex:', buf.toString('hex'));
