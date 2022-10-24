const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const water = cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])

log(water(20))
log(water(0))
log(water(100))

