#!/usr/bin/node
// 01-assertion.js

var assert = require('assert');

var order = {};
order.subtotal = 3.99 * 4;

//assert(0);
assert(1);
assert('hello');
assert(null);
//assert.equal(order.subtotal, 11.97, 'The price of three items a 3.99 each');
