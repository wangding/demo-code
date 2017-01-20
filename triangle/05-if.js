/**
 * Created by 王顶 on 2017/1/20.
 */

var level = Number(process.argv[2]);

if(level < 3)   {

    console.log('金字塔太小，法老住不下！');
}
else if(level > 10)  {
    console.log('金字塔太高，法老的钱不够！');
}
else if(isNaN(level))    {
    console.log('输入不合法！');
}
else {
    console.log(level);
}
