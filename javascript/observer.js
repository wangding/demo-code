var Subject = function() {
  var _observers = [];

  this.attach = function(observer) {
    _observers.push(observer);
  }

  this.detach = function() {
    return _observers.pop();
  }

  this.notify = function(msg) {
    for(var i=0; i<_observers.length; i++) {
      _observers[i].update(msg);
    }
  }

  this.print = function() {
    console.log(_observers.length);
    console.log(_observers);
  }
}

var Observer = function(name) {
  this.update = function(msg) {
    console.log('i am', name, 'and I got the message:', msg);
  }
}

var sub = new Subject();
var a = new Observer('a');
var b = new Observer('b');

sub.attach(a);
sub.attach(b);
//sub.print();
sub.notify('hello');

console.log('');

setTimeout(function() {
  var c = new Observer('c');
  sub.detach();
  sub.attach(c);
  sub.notify('world');
}, 1000);
