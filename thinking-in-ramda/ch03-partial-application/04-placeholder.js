const R = require('ramda');
const log = console.log;

// isPublishedInYear :: Object -> String -> boolean
const isPublishedInYear = R.curry((book, year) => book.year === year);

// titlesForYear :: [] -> String -> []
const titlesForYear = (books, year) => {
  const selected = R.filter(isPublishedInYear(R.__, year), books);
  return R.map(book => book.title, selected);
};

const books = [{
  title: 'wangding',
  year: '2022'
},{
  title: 'louying',
  year: '2000'
}];

log(titlesForYear(books, '2000'));
