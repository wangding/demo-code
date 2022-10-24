const R = require('ramda');
const log = console.log;

const arr = [2, 3, 5];

/* map */
R.map(double, arr);

/* foreach */


for(const value of arr) {
  //log(value);
}

R.forEach(log, arr);

/* function */

function double(x) {
  return x * 2;
}

//log(double(3));

const doubleArrow = x => x * 2;

//log(doubleArrow(3));
