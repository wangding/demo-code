const R = require('ramda');
const log = console.log;

Object.assign(global, R);

/* ----------------------  */
const person = {
  name: 'Randy',
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman'
  }
}

const nameLens = lensProp('name')
const twitterLens = lensPath(['socialMedia', 'twitter'])

log(view(nameLens, person))
log(view(twitterLens, person))
log(set(twitterLens, '@randy', person))
log(over(nameLens, toUpper, person))
