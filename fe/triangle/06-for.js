/**
 * Created by 王顶 on 2017/1/20.
 */

var level = Number(process.argv[2]);

for(var i = 0; i < level; i++)  {
    var space = '';
    var star = '';

    for(var k = 0; k < level - i; k++)  space += ' ';
    for(k = 0; k < 2 * i + 1; k++)  star += '*';
    console.log(space + star);
}