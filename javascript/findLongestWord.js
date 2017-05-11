function findlongestWord(str) {
  var sentens = str.split(' ');
  for(var i=0; i<sentens.length; i++) {
    [/_/g, /-/g, /:/g, /\(/g, /\//g, /\)/g, /,/g, /\./g, / /g].forEach(function(e) {
      sentens[i] = sentens[i].replace(e, '');
    });
  }

  var max = 0;
  sentens.forEach(function(e) {
    max = max > e.length ? max : e.length;
  })

  return max;
}

console.log(findlongestWord('Prints to stdout, with newline.'));
