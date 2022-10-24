const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */

//const alwaysDrivingAge = ifElse(lt(__, 16), always(16), a => a)
const alwaysDrivingAge = ifElse(lt(__, 16), always(16), identity)
log(alwaysDrivingAge(2))

