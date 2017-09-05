#!/usr/bin/node
// 02-event-emitter.js

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

console.log('Start...');

emitter.on('hello', function() {
  console.log('receive hello event');
});

emitter.on('bye', function() {
  console.log('receive bye event');
});

setTimeout(function() {
  emitter.emit('hello');
}, 1500);

setTimeout(function() {
  emitter.emit('bye');
}, 500);
