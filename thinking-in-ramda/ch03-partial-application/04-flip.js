const R = require('ramda');
const log = console.log;

// isPublishedInYear :: Object -> String -> boolean
const isPublishedInYear = (book, year) => book.year === year;

// titlesForYear :: [] -> String -> []
const titlesForYear = (books, year) => {
  const selected = R.filter(R.flip(isPublishedInYear)(year), books);
  return R.map(book => book.title, selected);
};

const books = [{
  title: 'wangding',
  year: '2022'
},{
  title: 'louying',
  year: '2000'
}];

log(titlesForYear(books, '2022'));
