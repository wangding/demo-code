var pic = require('cat-picture');
var image = require('lightning-image-poly');
var remote = require('electron').remote;
var fs = require('fs');

var src = pic.src;
pic.remove();

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

function save() {
    remote.getCurrentWindow().webContents.printToPDF({
        portrait: true},
        function (err, data) {
            fs.writeFile('annotation.pdf', data, function (err) {
                if(err) alert('error generating pdf!' + err.message);
                else alert('pdf saved!');
            });
        });
}

window.addEventListener('keydown', function (e) {
    if(e.keyCode == 80) save()
});