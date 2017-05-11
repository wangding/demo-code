function titleCase(str) {
  var words = str.split(' ');
  console.log(words);
  for(var i=0; i<words.length; i++) {
    words[i] = words[i].toLowerCase();
    words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
  }

  console.log(words.join(' '));
  return words.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));
