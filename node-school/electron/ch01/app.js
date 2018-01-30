var electron = require('electron');

electron.app.on('ready', function () {
    var mainWnd = new electron.BrowserWindow({width: 600, height:400});
    mainWnd.loadURL('file://' + __dirname + '/index.html');
});