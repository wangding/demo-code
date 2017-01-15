/**
 * Created by 王顶 on 2017/1/10.
 */
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var datas = ['0', '0', '0'];
var num = 0;

function pro(n, data) {
    if(num == 3)    return datas.forEach(console.log);
}

http.get(url1, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        datas[0] += data;
    });

    res.on('end', function () {
       pro(++num, datas);
    });
});

http.get(url2, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        datas[1] += data;
    });

    res.on('end', function () {
       pro(++num, datas);
    });
});

http.get(url3, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        datas[2] += data;
    });

    res.on('end', function () {
       pro(++num, datas);
    });
});
