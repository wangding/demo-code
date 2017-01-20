/**
 * Created by 王顶 on 2017/1/20.
 */

var triangle = {
    level: 4,
    print: function () {
        for(var i = 0; i < this.level; i++)  {
            var space = '';
            var star = '';

            for(var k = 0; k < this.level - i; k++)  space += ' ';
            for(k = 0; k < 2 * i + 1; k++)  star += '*';
            console.log(space + star);
        }
    }
};

triangle.level = 6;
triangle.print();