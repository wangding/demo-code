function palindrome(str) {
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  [/_/g, /-/g, /:/g, /\(/g, /\//g, /\)/g, /,/g, /\./g, / /g].forEach(function(elem) {
    str = str.replace(elem, '');
    console.log(str);
  })
  console.log(str);
  var str1 = str.split('').reverse().join('');
  console.log(str1);
  return str === str1;
}

console.log(palindrome('0_0 (: /-\ :) 0-0'));
