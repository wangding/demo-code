const R = require('ramda');
const log = console.log;

const arr = [1, 2, 3, 4];
const add = (x, y) => x + y;

log(R.reduce(add, 5, arr));
