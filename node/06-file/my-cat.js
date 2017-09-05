var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function(err, buf) {
  if(err) {
    console.log(err.message);
    process.exit(2);
  } else {
    console.log(buf.toString('utf8'));
  }
});
