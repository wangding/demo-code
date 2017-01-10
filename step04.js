var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if(err) return console.log(err);

    var lines = data.split('\n').length - 1;
    console.log(lines);
});