function where(arr, num) {
  arr.push(num);
  console.log(arr);
  arr.sort(function(a, b) {
    return a-b;
  });
  console.log(arr); 
  //console.log(arr.sort());
  return arr.indexOf(num);
}

console.log(where([3, 10, 5], 3));
