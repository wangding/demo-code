function bouncer(arr) {
  var ans = [];

  arr.forEach(function(e) {
    if(Boolean(e) === true) ans.push(e);
  });
  console.log(ans);
  return ans;
}

console.log(bouncer([7, 'ate', '', false, 9, null, 0, NaN]));
