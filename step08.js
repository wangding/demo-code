/**
 * Created by 王顶 on 2017/1/10.
 */
var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function (res) {
    res.setEncoding('utf-8');
    res.pipe(bl(function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});