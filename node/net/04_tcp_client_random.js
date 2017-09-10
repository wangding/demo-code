var port = parseInt(process.argv[2], 10) || 8000;
var host = process.argv[3] || 'localhost'

var net = require('net');
var client = net.connect(port, host);
client.setEncoding('utf8');

client.once('connect', function() {
  setInterval(function() {
    client.write(randomPhrase() + '\n');
  }, 5000);
});

/// Random Phrase
var sets = [
  ['the', 'many', 'some']
, ['repeating', 'twelve', 'immortal', 'sequel']
, ['monkey', 'cat', 'dog', 'shark']
, ['sighed', 'cried', 'ran', 'barked', 'purred', 'swam']
, ['fast', 'slow', 'carefully', 'perfectly']
];

function randomPhrase() {
  var words = [];
  var set, word;
  for (var i = 0; i < sets.length ; i ++) {
    set = sets[i];
    word = set[Math.floor(Math.random() * set.length)];
    words.push(word);
  }
  return words.join(' ');
}
///
