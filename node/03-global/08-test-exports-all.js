#!/usr/bin/node
// 07-test-exports-all.js

var obj = require('./07-exports-all');

console.log(obj.pi);
console.log(obj.circle(10).area());

var c = new obj.Circle(20);
console.log(c.diameter());
