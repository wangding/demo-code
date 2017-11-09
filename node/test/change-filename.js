var qs = require('querystring'),
    fs = require('fs'),
    fileName = process.argv[2];

var f = qs.parse(fileName);
console.log(f);

/*
for(var a in f) {
  console.log(a);
}
//console.log(f);
*/
var files = fs.readdirSync('./aa');

//console.log(files);

for(var i=0; i<files.length; i++) {
  var f = qs.parse(files[i]);
  var name = '';
  for(name in f) { name += ''; }
  fs.renameSync('./aa/'+files[i], './aa/' + name);
  //console.log('./aa/' + name);
}
