var fun = require('./fun');

fun(process.argv[2], process.argv[3], function (err, data) {
    if(err)  return console.log(err);
    data.forEach(function (d) {
        console.log(d);
    })
});
