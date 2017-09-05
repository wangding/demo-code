var get = require('http').get;
var fs = require('fs');

var target = fs.createWriteStream(__dirname + '/support/nodejs.png');

get('http://nodejs.org/logo.png', function(res) {
  res.pipe(target);
});

target.once('finish', function() {
  console.log('done');
});
