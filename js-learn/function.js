/*
 * 函数相关的 Demo Code
 * 
 */

// 函数作为参数
function add(x, y) {
	return x + y;
}

function a(opt) {
	return opt;
}

console.log(add(1,2));
console.log((add)(1,1));

console.log(add.name);
console.log(a.name);

console.log(add.length);

