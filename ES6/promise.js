//生成一个0-2之间的随机数，如果小于1，
//则等待一段时间后返回成功，否则返回失败

//test()有两个参数函数
//test()只关系自身的逻辑，不关系具体的resolve和reject做如何处理
function test(resolve,reject){
	var timeOut = Math.random()*2;
//	log('set timeout to:'+timeOut+'seconds');
	setTimeout(function(){
		if(timeOut<1){
//			log('call resolve()...');
			resolve('200 OK'+timeOut);
		}else{
//			log('call reject()...');
			reject('timeout in'+timeOut+'seconds');
		}
	},timeOut*1000)
}
//有了执行函数，用一个promise对象来执行它，并在将来某个时刻获得结果
//变量p1是一个promise对象，它负责执行test函数。由于test函数在内部是
//异步执行的，当test函数执行成功是。我们告诉promise对象
var p1 = new Promise(test);
var p2 = p1.then(function(result){
	console.log('成功:'+result)
});
var p3 = p2.catch(function(reason){
	console.log('失败:'+reason);
});

//promise对象可以串起来进行链式操作
//补充
//new Promise(test).then(function(result){
//	console.log('成功：'+result);
//}).catch(function(reson){
//	console.log('失败：'+reson)
//});