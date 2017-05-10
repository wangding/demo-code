var fs = require('fs');

var data = JSON.parse(fs.readFileSync('../user-data.json', 'utf-8'));

console.log(data.length);
for(var i=0; i<data.length; i++) {
  if(data[i].id === '12000517') {
    console.log(data[i]);
    break;
  }
}
