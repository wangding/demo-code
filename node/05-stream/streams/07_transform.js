var Transform = require('stream').Transform;

function createTransformStream() {
  var upcase = new Transform();
  upcase._transform = function _transform(buf, encoding, done) {
    this.push(buf.toString().toUpperCase());
    done();
  };
  return upcase;
}

process.stdin.pipe(createTransformStream()).pipe(process.stdout);
