var fs = require('fs');
var join = require('path').join;

var src = process.argv[2];

if(fs.statSync(src).isFile())  fs.unlink(src);

if(fs.statSync(src).isDirectory()) {
  deleteFile(src);
  deleteDir(src);
}

function deleteFile(folder) {
  var files = fs.readdirSync(folder);
  console.log(files);
  console.log('==============');

  files.forEach(function(f) {
    var file = join(folder, f);
    if(fs.statSync(file).isFile())  fs.unlink(file);
    if(fs.statSync(file).isDirectory()) deleteFile(file);
  });
}

function deleteDir(folder) {
  var dirs = fs.readdirSync(folder);
  console.log(dirs);
  console.log('----------------');

  if(dirs.length > 0) {
    dirs.forEach(function(d) {
      var dir = join(folder, d);
      deleteDir(dir);
    });
  } else {
    fs.rmdirSync(folder);
  }
}

