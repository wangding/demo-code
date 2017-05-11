function confirmEnding(str, target) {
  target = target.split('').reverse().join('');
  console.log(target);
  str = str.split('').reverse().join('');
  console.log(str);

  for(var i=0; i<target.length; i++) {
    if(target[i] != str[i]) return false;
  }

  return true;
}

console.log(confirmEnding('Bastian', 'ian'));
