const R = require('ramda');
const log = console.log;

Object.assign(global, R);

const p = {
  name: 'wangding',
  age: 28,
  birthCountry: 'CN',
  naturalizationDate: Date.now()
};

log(pick(['age', 'name'], p));
