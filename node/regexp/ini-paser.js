var fs = require('fs');

console.log(fs.readFileSync('./tox.ini'));

function splitLine(str) {
  return str.splite(/\r?\n/);
}

