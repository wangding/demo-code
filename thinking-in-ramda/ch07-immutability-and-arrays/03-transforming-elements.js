const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const numbers = [10, 20, 30, 40, 50, 60]

log(update(2, multiply(10, nth(2, numbers)), numbers))
log(adjust(2, multiply(10), numbers))
