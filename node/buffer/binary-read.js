var fs = require('fs');

fs.readFile('./buf.js', function(err, buf) {
  console.log(buf);
  console.log(buf.length);

  for(var i=0; i<buf.length; i++) {
    console.log(buf.readUInt8(i));
  }
});

