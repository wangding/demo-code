var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    var now = new Date();
    var month = format(now.getMonth() + 1);
    var days = format(now.getDate());
    var hour = format(now.getHours());
    var minute = format(now.getMinutes());

    var time = now.getFullYear() + '-' +
        month + '-' +
        days  + ' ' +
        hour  + ':' +
        minute + '\n';

    socket.end(time);
});

server.listen(port);

function format(num) {
    if(num < 10) {
        return '0' + num.toString();
    }
    else {
        return num.toString();
    }
}
