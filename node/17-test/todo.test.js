#!/usr/bin/node
// todo.test.js

var assert = require('assert');
var Todo = require('./todo');
var testCompleted = 0;

var todo = new Todo();

function deleteTest() {
  todo.add('Delete Me');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No items should exist');
  testCompleted++;
}

function addTest() {
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exist');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  testCompleted++;
}

function throwTest() {
  assert.throws(todo.add, /require/);
  testCompleted++;
}

function doAsyncTest(cb) {
  todo.doAsync(function(value) {
    assert(value, 'callback should be passed true');
    testCompleted++;
    cb();
  });
}


deleteTest();
addTest();
throwTest();
doAsyncTest(function() {
  console.log('Completed %d tests.', testCompleted);
})

