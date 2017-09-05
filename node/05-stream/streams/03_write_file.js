var fs = require('fs');
var times = parseInt(process.argv[2]) || 1;
var stream = fs.createWriteStream(__dirname + '/out.txt');

console.log('Times: %d', times);

stream.on('drain', function() {
  process.stdout.write('D');
});

var interval = setInterval(function() {

  for (var i = 0; i < times; i++) {
    var flushed = stream.write(new Buffer(1024));
    process.stdout.write(flushed ? 'F' : 'Q');
  }
  process.stdout.write('#');
}, 100);

setTimeout(function() {
  clearInterval(interval);
  stream.end();
}, 2000);
