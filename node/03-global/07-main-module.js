#!/usr/bin/node
// 07-main-module.js

var circle = require('./07-exports-function');
var pi = require('./07-exports-var.js');
var CR = require('./07-exports-object.js');

console.log(circle);
console.log(circle(20).area());
console.log(circle(20).circumference());

console.log(pi);

console.log(CR);
var c = new CR(10);
console.log(c.diameter());
console.log(c.circumference());
console.log(c.area());
