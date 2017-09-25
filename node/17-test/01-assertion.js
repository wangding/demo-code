#!/usr/bin/node
// 01-assertion.js

var assert = require('assert');

// step 1

//assert(0);
assert(1);
assert('hello');
//assert(null);

// step 2

var order = {};
order.subtotal = 3.99 * 4;

//assert.equal(order.subtotal, 11.97, 'The price of three items a 3.99 each');

// step 3

function User(name) {
  this.name = name;
  this.permission = {
    admin: false
  };
}

function login(name) {
  var user = new User(name);
  user.permission.admin = true;
  
  return user;
}

var actual_user = login('wangding');
var expected_user = new User('wangding');
expected_user.permission.admin = true;

//assert.equal(actual_user, expected_user, 'The user state was not correct');
assert.deepEqual(actual_user, expected_user, 'The user state was not correct');
