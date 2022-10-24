const R = require('ramda');
const log = console.log;

Object.assign(global, R);

const OUR_COUNTRY = 'CN';
const wasBornInCountry = compose(equals(OUR_COUNTRY), prop('birthCountry'))
const wasNaturalized = compose(Boolean, prop('naturalizationDate'))
const isOver18 = compose(gte(__, 18), prop('age'))

const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)

const p = {
  age: 28,
  birthCountry: 'CN',
  naturalizationDate: Date.now()
};

log(isEligibleToVote(p));
