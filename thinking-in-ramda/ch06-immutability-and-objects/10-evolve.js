const R = require('ramda');
const log = console.log;

Object.assign(global, R);

const p = {
  name: 'wangding',
  age: 28,
  birthCountry: 'CN',
  naturalizationDate: Date.now(),
  data: {
    a: 1,
    b: 2
  }
};

//const nextAge = compose(inc, prop('age'))
//const celebrateBirthday = person => assoc('age', nextAge(person), person)
const celebrateBirthday = R.evolve({ age: inc})
log(celebrateBirthday(p));
