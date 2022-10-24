const R = require('ramda');
const log = console.log;

const multiply = (x, y) => x * y;
const addOne = x => x + 1;
const square = x => x * x;

const opt = R.compose(
  square,
  addOne,
  multiply
);

log(opt(2, 4));
