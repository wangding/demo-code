const R = require('ramda');
const log = console.log;

const arr = [21, 34, 55, 24];
const double = x => x * 2;

log(R.map(double, arr));


