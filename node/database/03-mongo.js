#!/usr/bin/node

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/todo';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  //insert(db, {"item": "have breakfast"}, function() {db.close();});
  find(db, function() {db.close();});
});

function find(db, cb) {
  var cursor = db.collection('todo').find();

  cursor.each(function(err, doc) {
    if(doc !== null) { console.log(doc); } else { cb(); }
  });
}

function insert(db, item, cb) {
  db.collection('todo').insertOne(item, function(err, result) {
    assert.equal(err, null);
    cb();
  });
}
