var util = require('util');
var EventEmitter = require('events').EventEmitter;
var f1 = new EventEmitter();

f1.on('done', f2);

function f2(id) {
  console.log('this is f2, with done event ' + id);
}

console.log('begin');

setTimeout(function() {
  f1.emit('done', 100);
}, 1000);

f1.emit('done', 200);
f1.once('ok', f3);

f1.emit('ok');
f1.emit('ok');
f1.emit('ok');

function f3() {
  console.log('this is f3, with ok event');
}

function Dog(name) {
  this.name = name;
}

//Dog.prototype.__proto__ = EventEmitter.prototype;
//Dog.prototype = Object.create(EventEmitter.prototype);
util.inherits(Dog, EventEmitter);

var wang = new Dog('wang');

wang.on('bark', function() {
  console.log(this.name + ' barked');
});

wang.emit('bark');
