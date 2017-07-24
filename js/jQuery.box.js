;
(function($) {
	//tab选项卡插件
	$.fn.tab = function(options) {
		//默认配置参数
		var defaults = $.extend({
			//默认第0个显示
			index: 0,
			//默认添加class类
			class: 'active'
		}, options);
		var tab = this.find('.tabBox>.tab');
		var item = this.find('.itemBox>.item');

		function tabAddActive(obj) {
			$(obj).addClass(defaults.class).siblings().removeClass(defaults.class);
		}

		function tabShowItem(obj) {
			$(obj).show().siblings().hide();
		}
		tabAddActive(tab[defaults.index]);
		tabShowItem(item[defaults.index]);
		$(tab).click(function() {
			var i = $(tab).index($(this));
			tabAddActive(this);
			tabShowItem(item[i])
		})
		return this;
	}
	//返回頂部插件
	$.fn.backTop = function(scrollHide) {
		//设置默认值为false 元素不隐藏
		scrollHide=scrollHide || false;
		var ele=this;
		if(scrollHide) {
			$(window).scroll(function(e) {
				//若滚动条离顶部大于100元素
				if($(window).scrollTop() > 100){
					$(ele).fadeIn(500); //以.5秒的间隔渐显id=gotop的元素
				}else {
					$(ele).fadeOut(500); //以.5秒的间隔渐隐id=gotop的元素
				}
			});
		}
		this.click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
		})
		return this;
	}
	$.fn.select=function(options){
		//默认配置参数
		var defaults = $.extend({
			//默认第0个显示
			index: 0
		}, options);
		var list=this.find($('.list'));
		var option=this.find($('.option'));
		function slideToggle(obj){
			$(obj).slideToggle()
		}
		//默认显示哪个
		$(option).html($(list[defaults.index]).text())
		//默认隐藏
		$(list).hide();
		//点击展开事件
		option.click(function () {
			slideToggle(list)
		})
		//点击切换事件
		list.click(function () {
			slideToggle(list)
			$(option).html($(this).text());
		})
		return this;
	}
})(window.jQuery || window.PRselector);












