const R = require('ramda');
const log = console.log;

const arr = [21, 34, 55, 24];

for(const value of arr) {
  log(value);
}

log('--------------');

R.forEach(log, arr);
