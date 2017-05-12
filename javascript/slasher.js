function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 2));
