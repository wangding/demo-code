/**
 * Created by 王顶 on 2017/1/20.
 */

function triangle(level) {
    var result = '';

    for(var i = 0; i < level; i++)  {
        var space = '';
        var star = '';

        for(var k = 0; k < level - i; k++)  space += ' ';
        for(k = 0; k < 2 * i + 1; k++)  star += '*';
        result += (space + star + '\n');
    }

    return result;
}

console.log(triangle(4));
