//数组去重
//方法一:
function test(arr){
	var arr1 = [];
	for(var i=0;i<arr.length;i++){
		if(arr1.indexOf(arr[i]) == -1){
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
var arr = [1,1,2,2];
// console.log(test(arr));
//方法二:定义一个哈希对象  哈希对象：一个对象中不允许有重复的下标
var arr=[1,2,3,2,1,4];
var hash={};//哈希对象
for(var i=0;i<arr.length;i++){
	hash[arr[i]]=1;
}
var res=[];
var i=0;
for(res[i++] in hash);
//console.log(res)


//一次遍历找出两个已经排好序的数组中所有相同的值
//题眼=》两个排好序的数组
var arr1 = [1,3,7,9,37,45,92,99];
var arr2 = [2,4,9,13,37,88,92];
for(var i=0,j=0,result=[];i<arr1.length&&j<arr2.length;){
	if(arr1[i]==arr2[j]){//如果当前位置的两个值相等，就一起前进一步
		result.push(arr1[i]);
		i++; j++;
	}else if(arr1[i]<arr2[j]){//如果上小于下。则上前进一步
		i++;
	}else{//否则如果上大于下，则下前进一步
		j++;
	}
}
console.log(result);


//去掉数组中非数字字符，并给每个数字+1
//只要数组在遍历中要改变数组长度  要从后往前遍历
var arr=[1,2,3,"a",4,"b"]
for(var i=arr.length-1;i>=0;i--){
	if(typeof(arr[i])=="number"){
		arr[i]++
	}else{
		arr.splice(i,1)
	}
}
console.log(arr);


//一个已经排好序的数组找出任意两个数相加的和为19的两个数
var arr = [1,2,4,6,7,11,12,15,17,19];
for(var i=0,j=arr.length-1;i<j;){
	if(arr[i]+arr[j]==19){//当前两个值相加，刚好等于10，就都往中间挪一步
		// console.log(arr[i],"+",arr[j]);
		i++; j--;
	}else if(arr[i]+arr[j]>19){//如果当前两个数相加大于19，就右边向左移
		j--;
	}else{//否则如果当前两数相加<19,就增大左边的数。直到i和j鹊桥相会
		i++;
	}
}



// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
// 和 ['A', 'B', 'C', 'D']，
// 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
let a1 = ['A1','A2','B1','B2','C1','C2','D1','D2'];
let a2 = ['A','B','C','D'].map((item) => {
	return item + 3
})
//将a1和a2和并未为a3数组并排序返回一个新的数组
let a3 = [...a1,...a2].sort().map((item) => {
	if(item.includes('3')){//如果有含有3的字符串
		//就将这个字符串切割取下标为0的字符
		//取到的字符"A","B","C","D"还在原来"A3","B3","C3","D3"的位置
		return item.split('')[0]
	}

	return item
})
//console.log(a3)



// 判断一个对象是不是数组类型  一共有几种方法
// 不正确的方法typeof   typeof判断原始类型 不能判断引用类型的详细类型
var n=10,str="hello",b=true,nu=null,un;
var f=function(){};
var obj1={} , obj2=[1,2,3] , obj3=new Date();
console.log(
	typeof(n),//number
	typeof(str),//string
	typeof(b),//boolean
	typeof(nu),//object
	typeof(un),//undefined
	typeof(f),//function
	typeof(obj1),//object
	typeof(obj2),//object
	typeof(obj3)//object
)



//用爹判断对象是不是数组家孩子：3种
//1.用_proto_获得对象的爹，然后再和数组的爹作比较
console.log(
	obj1.__proto__==Array.prototype,//false
	obj2.__proto__==Array.prototype,//true
	obj3.__proto__==Array.prototype//false
)
//2.因为_proto_可能被浏览器禁用，所以有等效的函数来完成
//_proto_的任务：Object.getPrototypeOf(child)
console.log(
	Object.getPrototypeOf(obj1)==Array.prototype,//false
	Object.getPrototypeOf(obj2)==Array.prototype,//true
	Object.getPrototypeOf(obj3)==Array.prototype//false
)
//3.一种更直接的函数：father.isPrototypeOf(child)
console.log(
	Array.prototype.isPrototypeOf(obj1),
	Array.prototype.isPrototypeOf(obj2),
	Array.prototype.isPrototypeOf(obj3),
)
//判断妈妈
//4.用父级原型对象中constructor属性
console.log(
	obj1.constructor==Array,
	obj2.constructor==Array,
	obj3.constructor==Array,
)
// 5.用"child instanceof 妈妈"  ==》bool
//				实例
console.log(
	// obj1是Array的孩子(实例)吗
	obj1 /*is*/ instanceof Array,
	obj2 /*is*/ instanceof Array,
	obj3 /*is*/ instanceof Array,
)
//6. 输出对象中的DNA：内部隐藏属性class
// Object.prototype.toString.call(obj1)是判断任意类型的最可靠方法
console.log(Object.prototype.toString.call(obj1)=="[object Array]");//false
console.log(Object.prototype.toString.call(obj2)=="[object Array]");//true
console.log(Object.prototype.toString.call(obj3)=="[object Array]");//false
// ES5中新增了一个专门判断一个对象是不是数组的函数；
// Array.isArry(obj)
// isArray()封装的就是 Object.prototype.toString.call(obj1)
console.log(
	Array.isArray(obj1),
	Array.isArray(obj2),
	Array.isArray(obj3)
)
// 共七种