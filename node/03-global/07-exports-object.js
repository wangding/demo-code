#!/usr/bin/node
// 07-exports-object.js

var pi = Math.PI;

var Circle = function (radius) {
  this.diameter = function() {
    return 2 * radius;
  }

  this.circumference = function() {
    return pi * 2 * radius;
  }

  this.area = function() {
    return pi * Math.pow(radius, 2);
  }
}

console.log('\n07-exports-object\n', module);

module.exports = Circle;
