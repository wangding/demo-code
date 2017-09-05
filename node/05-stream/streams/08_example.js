var request = require('request');
var zlib = require('zlib');
var fs = require('fs');
var tar = require('tar');

/// create streams

// create download stream
var download = request('https://github.com/dscape/p/tarball/master');

download.once('end', function() {
  console.log("download done");
});

// create gunzip transform stream
var gzip = zlib.Gunzip();

// create extract write stream
var extractor = tar.Extract({ path: __dirname + '/support' });

extractor.on('entry', function(entry) {
  if (entry.type === 'File') {
    console.log('[unpack] `' + entry.path + '`');
  }
});

extractor.on('end', function () { 
  console.log("unpack done"); 
});

/// plumbing

// download -> gzip -> extractor
download.pipe(gzip).pipe(extractor);

// download -> ./support/p.tar.gz
download.pipe(fs.createWriteStream(__dirname + '/support/p.tar.gz'));
///
