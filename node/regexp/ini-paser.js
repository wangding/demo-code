function splitLine(str) {
  return str.split(/\r?\n/);
}

var fs = require('fs');

var input = fs.readFileSync('./tox.ini').toString('utf8');
console.log(splitLine(input));


