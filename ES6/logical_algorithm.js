//数组去重
function test(arr){
	var arr1=[];
	for(var i=0;i<arr.length;i++){
		if(arr1.indexOf(arr[i]) == -1){
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
var arr=[1,1,2,2];
console.log(test(arr));