class Box {
	getDefaults() {
		console.log(this.ele);
	}
	tab(ele,options){
		this.ele = document.querySelector(ele)
		this.defaults = Object.assign({
			//默认第0个显示
			index: 0,
			//默认添加class类
			class: 'active'
		}, options)
		console.log(this.defaults);
	}
}
myBox=new Box()
let box1 = myBox.tab('.tab1',{
	color: 'blue'
})
