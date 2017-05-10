var a = {
  name: 'wangding',
  age: 40,
  print: function() {
    console.log('name:', this.name);
    console.log('age:', this.age);
  }
}

console.log(a);
a.print();
