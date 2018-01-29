var fs = require('fs');

var icon = fs.readFileSync('favicon.ico');


console.log(icon.toString('base64'));
