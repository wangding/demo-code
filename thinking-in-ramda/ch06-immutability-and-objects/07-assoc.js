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

log(assoc('name', 'louying', p));
