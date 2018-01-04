/**
 * Created by 王顶 on 2017/1/10.
 */
var http = require('http');
var url = process.argv[2];
var ans = '';

http.get(url, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
      ans += data;
    });
    res.on('end', function() {
      console.log(ans.length);
      console.log(ans);
    });
});
