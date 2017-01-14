/**
 * Created by 王顶 on 2017/1/10.
 */
var http = require('http');
var url = 'http://www.baidu.com';
var html = '';

http.get(url, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        html += data;
        console.log('--------------get some thing');
        console.log(data);
    });

    res.on('end', function (data) {
        console.log('end');
    });
}).on('error', function () {
    console.log('发生错误了！');
});