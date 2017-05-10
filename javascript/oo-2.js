var Person = function() {
  this.name = 'wangding';
  this.age = '40';
  this.print = function() {
    console.log(this.name);
    console.log(this.age);
  }
}

var a = new Person();
a.print();

a.name = 'limingliang';
a.print();
