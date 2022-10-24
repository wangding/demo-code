const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const numbers = [10, 20, 30, 40, 50, 60]

log(nth(0, numbers))
log(head(numbers))

log(nth(-1, numbers))
log(last(numbers))

log(nth(3, numbers)) // => 40  (0-based indexing)
log(nth(-2, numbers)) // => 50 (negative numbers start from the right)

log(tail(numbers))
log(init(numbers))

log(take(2, numbers))
log(takeLast(2, numbers))

log(slice(2, 5, numbers)) // => [30, 40, 50] (see below)

//log(R.contains(20, numbers)) // => true
