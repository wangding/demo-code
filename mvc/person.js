#!/usr/bin/node

var Class = function() {
  var klass = function() { this.init.apply(this, arguments) };
  klass.prototype.init = function() {};
  return klass;
};

var Person = new Class;

Person.prototype.init = function() {
  this.name = '';
  this.age = 0;
};

var wangding = new Person;
wangding.name = 'wangding';
wangding.age = 40;

console.log(wangding);
