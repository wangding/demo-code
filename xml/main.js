/* browserify main.js -o bundle.js */
$(() => {
  var parseString = require('xml2js').parseString;

  var xml = '<?xml version="1.0"?><person><name>wangding</name><age>42</age></person>';

  parseString(xml, function (err, result) {
      console.dir(result);
  });
});
