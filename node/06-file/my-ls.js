var fs = require('fs');

var dir = process.argv[2];

fs.readdir(dir, function(err, files) {
  console.log(files);
})
