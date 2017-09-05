#!/usr/bin/node

var Readable = require('stream').Readable;
var util = require('util');

var c = 97;

var MyReadable = function() {
  Readable.call(this);
}

MyReadable.prototype._read = function() {
  rs.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0))  rs.push(null);
};

util.inherits(MyReadable, Readable);

var rs = new MyReadable();

rs.pipe(process.stdout);
