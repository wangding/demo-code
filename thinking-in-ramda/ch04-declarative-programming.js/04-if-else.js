const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */

//const forever21 = age => age >= 21 ? 21 : age + 1
const forever21 = ifElse(gte(__, 21), ()=>21, inc)

log(forever21(18))
log(forever21(22))
