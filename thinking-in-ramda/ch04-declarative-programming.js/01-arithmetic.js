const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
/*
const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

const operate = pipe(
  multiply,
  addOne,
  square
)
*/
//log(operate(3, 4))

const square = x => R.multiply(x, x)
const opt = pipe(
  multiply,
  inc,
  square
)

log(opt(3, 4))

//R.add(a, b)
//R.subtract(__, b)
//R.multiply(a, b)
//R.divide(__, b)

//R.inc(n)
//R.dec(n)
