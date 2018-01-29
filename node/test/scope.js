#!/usr/bin/node

var a, b, c;

function log() {
  a = 100;
}

function abc(a, b) {
  a = a;
  b = b;
}

log();
abc(10, 20);

console.log(a);
