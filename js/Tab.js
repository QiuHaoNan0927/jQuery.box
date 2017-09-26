"use strict"
//var a = '4'
//var b = Number(a)
//while (b>0){
//	console.log('Can I help U?');
//	b-=1;
//};
// do
// {
//   console.log('Can I help U?');
//   b -= 1;
// }
// while (b > 0) {
//   let b = 1
//   while (b < 5) {
//     let c = b * 2
//     console.log(c)
//     b++
//   }
// }
//function user() {
//var passWorld,
//  userName;
//function dologin(us, pw) {
//  passWorld = pw;
//  userName = us;
//}
//var publicAPI = {
//  login: dologin
//}
//return publicAPI;
//}
//var xiaoming = user();
//xiaoming.login('xiaoming', '123456');
//
//function functionName() {
//(function() {
//  console.log(1)
//})();
//console.log(2)
//}
//functionName();

//定义一个模块包装器
var MyModules=(function () {
	var modules={}
	function define (name,deps,impl) {
		for (var i = 0; i < deps.length; i++) {
			deps[i]=modules[deps[i]]
		}
		modules[name]=impl.apply(impl,deps)
	}
	function get (name) {
		return modules[name]
	}
	return{
		define:define,
		get:get
	}
})()

MyModules.define('bar',[],function () {
	function hello(who) {
		return 'hello : ' + who
	}
	return{
		hello:hello
	}
})
var bar=MyModules.get('bar')


MyModules.define('foo',['bar'],function (bar) {
	var a='abc'
	function awesome () {
		return bar.hello(a).toUpperCase()
	}
	return{
		awesome:awesome
	}
})
var foo1=MyModules.get('foo')

function foo(num) {
	console.log( "foo: " + num );
	// 追踪 `foo` 被调用了多少次
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}