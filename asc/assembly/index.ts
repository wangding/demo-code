// The entry file of your WebAssembly module.

export function fb(n: i32): i32 {
  let x = 1, y = 1, z = 0, count = 2;
  let out = new StaticArray<i32>(50);
  out[0] = out[1] = 1;

  while(z <= n){
    z = x + y;
    x = y;
    y = z;
    out[count] = z;
    count++;
  }

  return out[count-1];
}
