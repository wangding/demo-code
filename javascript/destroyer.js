function destroyer(arr) {
  console.log(arguments);
  var ans = [];

  for(var i=0; i<arr.length; i++) {
    for(var j=1; j<arguments.length; j++) {
      if(arr[i] === arguments[j]) break;
    }

    if(j === arguments.length) ans.push(arr[i]);
  }

  return ans;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
