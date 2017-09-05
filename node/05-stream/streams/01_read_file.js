var fs = require('fs');
var stream = fs.createReadStream(__dirname + '/support/npm.json');

stream.on('readable', function() {
  var data;
  while (data = stream.read()) {
    console.log('I have a piece with %d bytes', data.length);
  }
});
