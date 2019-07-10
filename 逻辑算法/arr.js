//数组去重
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

//一次遍历找出两个已经排好序的数组中所有相同的值
//题眼=》两个排好序的数组
console.log(1)
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
// console.log(result)

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
console.log(a3)
