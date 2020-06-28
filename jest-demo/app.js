#!/usr/bin/node

const log = console.log,
      sum = require('./sum.js');

if(process.argv.length !== 4) {
  log('./app.js x y');
  process.exit(1);
}

var x = process.argv[2],
    y = process.argv[3];

log(`${x} + ${y} = ${sum(x, y)}`);
