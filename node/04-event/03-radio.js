#!/usr/bin/node
// 03-radio.js

var events = require('events');
var util = require('util');

var Radio = function(station) {
  var self = this;
  events.EventEmitter.call(this);

  setTimeout(function() {
    self.emit('open', station);
  }, 0);

  setTimeout(function() {
    self.emit('stop', station);
  }, 5000);

  this.on('newListener', function(listener) {
    console.log('Event listener: ', listener);
  });
}

util.inherits(Radio, events.EventEmitter);

module.exports = Radio;
