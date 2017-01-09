var fs = require('fs');
var pt = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if(err) {
        return console.log(err);
    }

    for(var n in list) {
        if(pt.extname(list[n]) == ('.' + process.argv[3])) {
            console.log(list[n]);
        }
    }
});