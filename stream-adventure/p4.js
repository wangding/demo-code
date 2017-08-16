var through = require('through2');
var stream = through(write, end);

function write(buffer, encode, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
