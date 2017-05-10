var fs = require('fs');

var data = JSON.parse(fs.readFileSync('../user-data.json', 'utf-8'));

console.log(data.length);
/*``
for(var i=0; i<data.length; i++) {
  console.log(data[i]);
}
*/
