var bar = require('./bar.js')

module.exports = function(n) {
  return n * bar(n)
}
