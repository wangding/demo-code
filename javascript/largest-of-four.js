function largestOfFour(arr) {
  var max = [];
  for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
    max.push(0);
    for(var j=0; j<arr[i].length; j++) {
      console.log(arr[i][j]);
      max[i] = max[i] > arr[i][j] ? max[i] : arr[i][j];
    }
  }
  console.log(max);
  return max;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
