// 正确的从流的基类继承


// 方法一
var Readable = require('stream').Readable;
var util = require('util');

function MyStream(options) {
  Readable.call(this, options);
}

MyStream.prototype = Object.create(Readable.prototype, {
  constructor: { value: MyStream }
});

// 方法二

function MyStream2(options) {
  Readable.call(this, options);
}

util.inherits(MyStream2, stream.Readable);
