#!/usr/bin/node
// 03-dog.js

var events = require('events');

function Dog(name) {
  this.name = name;
  var self = this;
  events.EventEmitter.call(this);

  var timer = setInterval(function() {
    self.emit('bark');
  }, 1000);

  this.stop = function() {
    clearInterval(timer);
  }
}

Dog.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = Dog;
