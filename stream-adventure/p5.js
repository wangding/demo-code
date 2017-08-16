var split = require('split');
var through2 = require('through2');
var i = 0;

process.stdin.pipe(split()).pipe(through2(function(line, _, next) {
  //console.log(line.toString());
  //console.log(i++);

  if(i%2 === 0) {
    console.log(line.toString().toLowerCase());
  } else {
    console.log(line.toString().toUpperCase());
  }

  i++;
  next();
}));
