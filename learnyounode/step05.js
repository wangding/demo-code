var fs = require('fs');
var pt = require('path');

var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
    if(err)  return console.log(err);

    list.forEach(function (fileName) {
        if(pt.extname(fileName) == ext)  console.log(fileName);
    });
});