const R = require('ramda');
const log = console.log;

const arr = [21, 34, 55, 24];
const isEven = x => x % 2 === 0;

log(R.filter(isEven, arr));
