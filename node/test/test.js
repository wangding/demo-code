var assert = require('assert');
var add = require('./calc.js').add;
var actual = add(3, 4);
var expected = 7;

assert(actual, 'add() should have returned a value');
assert.equal(actual, expected, 'add() did not calculate the correct value');
