function factorialize(num) {
  var d = 1; 
  for(; num>0; num--) d *= num;
  return d;
}

console.log(factorialize(5));
