function repeat(str, num) {
  if(num < 0) return '';

  var result = '';
  for(var i=0; i<num; i++) {
    result += str;
  }

  return result;
}

console.log(repeat('abc', 3 ));
