const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */

//const alwaysDrivingAge = ifElse(lt(__, 16), always(16), identity)
const alwaysDrivingAge = when(lt(__, 16), always(16))
const alwaysDrivingAge2 = unless(gte(__, 16), always(16))
log(alwaysDrivingAge(42))
log(alwaysDrivingAge(2))
log(alwaysDrivingAge2(24))
log(alwaysDrivingAge2(4))

