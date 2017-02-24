/*
 * 这段代码测试一下 var 和 不用 var 声明的区别
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete
 */

var globalVar1 = 'wangding';
globalVar2 = 'wdamtb';

function testVar1 () {
	var localVar = 123;
	globalVar3 = 'JavaScript';
	
	console.log(globalVar1);
	console.log(localVar);
	console.log(globalVar3);
	
}

console.log(globalVar1);
// console.log(localVar); 这里报错，出了作用域了
// console.log(globalVar3); 这里报错，没有定义，出了作用域了?
console.log(globalVar2);

delete globalVar1;
delete globalVar2;

console.log(globalVar1);
// console.log(globalVar2); 这里会报错，显然被 delete 了


/*
 * 下面的代码测试一下变量提升
 */

function testVar2 () {
	console.log(wdName);
	var wdName = '王顶';
	
	// 并不报错，显示 wdName 变量为 undefined ，只是没有赋值而已
}


/*
 * 下面的代码测试一下 label 的用法
 * label not found 报错，不知道为什么
 */

function testLabel () {
	
	//OUT:
	console.log("I'm free!");
	var i = 0;
	
	for (; i<10; i++) {
		console.log('i = ' + i);
		
		for (var j=0; j<10; j++) {
			console.log('j = ' + j);
			
			if (5 === j) {
				// break OUT; 这里报错，提示没有定义标签
				break;
			}
			
			console.log('这是内层循环');
		}
		
		console.log('这是外层循环');
	}
	

}