const R = require('ramda');
const log = console.log;

const OUR_COUNTRY = 'CN';

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

//const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);
const isCitizen = R.either(wasBornInCountry, wasNaturalized);

//const isEligibleToVote = person => isOver18(person) && isCitizen(person);
const isEligibleToVote = R.both(isOver18, isCitizen);

const p = {
  age: 28,
  birthCountry: 'EN',
  naturalizationDate: Date.now(),
};

log(isEligibleToVote(p));
