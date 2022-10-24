const R = require('ramda');
const log = console.log;

const arr = [1, 2, 3, 4];
const isEven = x => x % 2 === 0;
const isOdd = R.complement(isEven);

log(R.find(isEven, arr));
log(R.find(isOdd, arr));
