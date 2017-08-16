// 使用流的第三方模块
//
// express 用了流

var stream = require('stream');
var util = require('util');
var express = require('express');
var app = express();

util.inherits(StatStream, stream.Readable);

function StatStream(limit) {
  stream.Readable.call(this);
  this.limit = limit;
}

StatStream.prototype._read = function(size) {
  if(this.limit === 0) {
    // Done
    this.push();
  } else {
    this.push(util.inspect(process.memoryUsage()));
    this.push('\n');
    this.limit--;
  }
};

app.get('/', function(req, res) {
  var statStream = new StatStream(10);
  statStream.pipe(res);
  console.log('method:' + req.method + ', url:' + req.url);
});

app.listen(8000);
