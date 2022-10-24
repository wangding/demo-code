const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
//const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age)
const forever21 = ifElse(gte(__, 21), always(21), inc)

log(forever21(8))
log(forever21(28))

//const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age)
const alwaysDrivingAge = ifElse(lt(__, 16), always(16), identity)

log(alwaysDrivingAge(6))
log(alwaysDrivingAge(26))

log(alwaysDrivingAge(6))
/*
const water = temperature => cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])(temperature)*/
const water = cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])

log(water(0))
log(water(100))
log(water(22))

/*
const titlesForYear = curry((year, books) =>
  pipe(
    filter(publishedInYear(year)),
    map(book => book.title)
  )(books)
)*/

const publishedInYear = curry((year, book) => R.gte(book.year, year))
const titlesForYear = curry((year, books) =>
  pipe(
    filter(publishedInYear(year)),
    map(book => book.title)
  )(books))
const books = [{
  title: 'wangding',
  year: 2022,
},{
  title: 'louying',
  year: 2021,
}]

log(titlesForYear(2022, books))

const OUR_COUNTRY = 'CN'
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = either(wasBornInCountry, wasNaturalized)

const isEligibleToVote = both(isOver18, isCitizen)

const p = {
  name: 'wangding',
  age: 8,
  birthCountry: 'CN',
  naturalizationDate: ''
}

log(isEligibleToVote(p))
