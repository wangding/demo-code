function chunk(arr, size) {
  var pos = 0;
  var ans = [];

  while(pos < arr.length) {
    var piece;

    piece = arr.slice(pos, pos + size);
    console.log(piece);
    pos += size;
    ans.push(piece);
  }

  return ans;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));
