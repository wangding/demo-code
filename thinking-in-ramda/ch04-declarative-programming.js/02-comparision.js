const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const OUR_COUNTRY = 'CN'

//const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasBornInCountry = person => equals(person.birthCountry, OUR_COUNTRY)
const wasNaturalized = person => Boolean(person.naturalizationDate)
//const isOver18 = person => person.age >= 18
const isOver18 = person => gte(person.age, 18)

const isCitizen = either(wasBornInCountry, wasNaturalized)

const isEligibleToVote = both(isOver18, isCitizen)

const p = {
  age: 28,
  birthCountry: 'CN',
  naturalizationDate: Date.now()
};

log(isEligibleToVote(p));

/*
R.equals(__, b)
R.gt(__, b)
R.gte(__, b)
R.lt(__, b)
R.lte(__, b)
R.identical(a, b)
R.isEmpty(value)
R.isNil(value)
*/
