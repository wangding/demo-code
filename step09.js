/**
 * Created by 王顶 on 2017/1/10.
 */
var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var datas = ['0', '0', '0'];
var num = 0;

function pro(n, data) {
    if(isFull()) {
        datas.forEach(function (data) {
            console.log(data);
        });
        return;
    }
    datas[n] = data;
}

function isFull() {
    var is = true;
    datas.forEach(function (data) {
        if(data == '0') return false;
    })
}
http.get(url1, function (res) {
    res.setEncoding('utf-8');
    res.pipe(bl(function (err, data) {
        if(err) return console.log(err);
        pro(0, data.toString());
    }));
});

http.get(url2, function (res) {
    res.setEncoding('utf-8');
    res.pipe(bl(function (err, data) {
        if(err) return console.log(err);
        pro(1, data.toString());
    }));
});

http.get(url3, function (res) {
    res.setEncoding('utf-8');
    res.pipe(bl(function (err, data) {
        if(err) return console.log(err);
        pro(2, data.toString());
    }));
});
