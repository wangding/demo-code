#!/usr/bin/node

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/todo';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  //db.collection('todo').insertOne({"item": "have break"});
  db.collection('todo').updateOne({"item": "have breakfast"}, {"itrem": "have launch"});
  //db.collection('todo').deleteOne({"item": "have break"});
  find(db, function() {db.close();});
});

function find(db, cb) {
  var cursor = db.collection('todo').find();

  cursor.each(function(err, doc) {
    if(doc !== null) { console.log(doc); } else { cb(); }
  });
}
