function rot13(str) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  console.log(a);
  a = a.split('');
  //console.log(a);
  var ans = [];

  for(var i=0; i<str.length; i++) {
    var index = a.indexOf(str[i]) + 13;
    if(index == 12) {
      ans.push(str[i]);
    }
    else {
      index = index > 25 ? index - 26 : index;
      ans.push(a[index]);
    }
  }

  return ans.join('');
}

console.log(rot13('SERR PBQR PNZC'));
