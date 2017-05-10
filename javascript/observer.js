var Subject = function() {
  var _observers = [];

  this.attach = function(observer) {
    _observers.push(observer);
  }

  this.detach = function() {
    return _observers.pop();
  }

  this.notify = function() {
    for(var i=0; i<_observers.length; i++) {
      _observers[i].update();
    }
  }

  this.print = function() {
    console.log(_observers.length);
    console.log(_observers);
  }
}

var Observer = function(name) {
  this.update = function() {
    console.log('i am', name, 'I got the message!');
  }
}

var a = new Subject();
var b = new Observer('b');
var c = new Observer('c');

a.attach(b);
a.attach(c);
//a.print();
a.notify();
