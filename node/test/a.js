function A() {
  this.a1 = 10;
  this.a2 = 20;

  this.a3 = function() {
    console.log('a1 = %d, a2 = %d', this.a1, this.a2);
  }
}

var a = new A();
a.a3();
console.log('prototype:', A.prototype);
console.log('prototype:', a.__proto__);

function B() {
  //A.call(this);
  console.log('this in B:', this);
  this.b1 = 30;
  this.b2 = 40;

  this.b3 = function() {
    console.log('b1 = %d, b2 = %d', this.b1, this.b2);
  }
}

B.prototype.__proto__ = A.prototype;

var b = new B();
b.b3();
//b.a3();
//console.log(b.a1);
console.log(b instanceof B);
console.log(b instanceof A);
