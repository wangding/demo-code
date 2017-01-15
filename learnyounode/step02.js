/**
 * Created by 王顶 on 2017/1/9.
 */

var sum = 0;

for(var n = 2; n < process.argv.length; n++) {
    // console.log(process.argv[n]);
    sum += Number(process.argv[n]);
}

//console.log('sum = ' + sum);
console.log(sum);
