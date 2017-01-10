/**
 * Created by 王顶 on 2017/1/10.
 */

module.exports = function foo(dir, ext, fun) {
    var fs = require('fs');
    var pt = require('path');

    var ex = '.' + ext;

    fs.readdir(dir, function (err, list) {
        if(err)  return fun(err);

        var data = new Array(0);
        list.forEach(function (fileName) {
            if(pt.extname(fileName) == ex)  data.push(fileName);
        });
        fun(null, data);
    });
};


