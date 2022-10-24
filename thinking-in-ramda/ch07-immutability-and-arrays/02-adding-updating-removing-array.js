const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const numbers = [10, 20, 30, 40, 50, 60]

log(insert(3, 35, numbers))
log(append(70, numbers))
log(prepend(0, numbers))
log(update(1, 15, numbers))

log(concat(numbers, [70, 80, 90]))
log(remove(2, 3, numbers))
log(without([30, 40, 50], numbers))
log(drop(3, numbers))
log(dropLast(3, numbers))
