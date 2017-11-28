var proto = {
  sentence: 4,
  probation: 2
};

var Prisoner = function(name, id) {
  this.name = name;
  this.id = id;
};

Prisoner.prototype = proto;

var p1 = new Prisoner('joe', '12A');
var p2 = new Prisoner('Sam', '2bc');
