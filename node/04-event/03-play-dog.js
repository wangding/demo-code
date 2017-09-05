#!/usr/bin/node
// 03-play-dog.js

var Dog = require('./03-dog');

var taidi = new Dog('taidi');
var energy = 10;

taidi.on('bark', function() {
  console.log(this.name + ' barked!');
  
  energy--;
  if(energy == 0) {
    taidi.stop();
    console.log(this.name + ' is tired!');
  }
});
