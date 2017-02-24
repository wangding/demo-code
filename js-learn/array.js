/*
 * 这是数组 JavaScript demo code
 */

function displayArrX (arr) {
	for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}

// arr1 定义并初始化
var arr1 = ['wang', 'ding', '13582027613'];

displayArrX(arr1);

// arr2 先定义后赋值
var arr2 = [];

arr2[0] = 'a';
arr2[1] = 'b';
arr2[2] = 'c';

displayArrX(arr2);

// arr3 数组中的元素可以是什么东西
var arr3 = [
	{a: 1},
	[1, 2, 3],
	function () {
		return 'wangding';
	}
]

displayArrX(arr3);
displayArrX(arr3[1]);

var getName = arr3[2];  // 如何使用匿名函数
console.log(getName());

// 数组是对象
console.log(typeof arr1);
console.log(typeof [1,2,3]);

// 数组的键名
arr1[3] = 'ok';
console.log(Object.keys(arr1));

// 数组对象的数字键名
arr1[100] = 'hello array';
console.log(arr1['0']);
console.log(arr1[0]);
console.log(arr1[100]);
console.log(arr1.length);

// 数组 length 是动态的
arr1.length = 2;
displayArrX(arr1);

arr1.length = 0;
displayArrX(arr1);  // arr1 中没有任何东西

// 数组增加属性，不影响 length
arr1['name'] = 'wangding';
arr1['gendar'] = 'male';
displayArrX(arr1);
console.log(arr1.length);

