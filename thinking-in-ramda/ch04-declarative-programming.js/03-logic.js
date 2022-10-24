const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */

let settings = {};
//const lineWidth = settings.lineWidth || 80;
const lineWidth = R.defaultTo(settings.lineWidth, 80);

log(lineWidth);
// use for function
// R.both       &&
// R.either     ||
// R.complement !

// use for value
// R.and(a, b)  &&
// R.or(, b)    ||
// R.not(value) !
