const R = require('ramda');
const log = console.log;

// isPublishedInYear :: Object -> String -> boolean
const isPublishedInYear = R.curry((year, book) => book.year === year);

// titlesForYear :: [] -> String -> []
const titlesForYear = (books, year) => R.pipe(
  R.filter(isPublishedInYear(year)),
  R.map(book => book.title)
)(books);

const books = [{
  title: 'wangding',
  year: '2022'
},{
  title: 'louying',
  year: '2000'
}];

log(titlesForYear(books, '2022'));
