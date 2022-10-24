const R = require('ramda');
const log = console.log;

const multiply = (x, y) => x * y;
const addOne = x => x + 1;
const square = x => x * x;

log(R.pipe(multiply, addOne, square)(2, 4));
