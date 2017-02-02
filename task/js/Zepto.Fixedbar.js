/*
 *
 * 导航条固定
 * author: Liu Yifei
 * date: 2017.1.25
 * email: 1001years@sina.cn
 * 
 * 使用说明：目标块需是absolute定位；
 * 参数格式为对象，id为必传，top不传默认为0
 * */

(function($) {
	var defaults = {
		id:'',
		top: 0
	}

	var F = {
		fixed: function(obj) {
			var oDiv = document.getElementById(obj.id);
			var top = oDiv.offsetTop;
			var top1 = oDiv.offsetTop - obj.top;
			
			var left1 = oDiv.offsetLeft;

			window.onscroll = function() {

				//console.log(top1);
				//console.log(document.body.scrollTop);

				if(document.body.scrollTop >= top1 ) {
					oDiv.style.position = 'fixed';
					oDiv.style.top = obj.top + 'px';
					oDiv.style.left = left1 + 'px';

				};
				if(document.body.scrollTop <= top1) {
					oDiv.style.position = 'absolute';
					oDiv.style.top = top + 'px';
				}
			}
		}
	}

	$.extend($.fn, {
		fixedBar: function(obj) {
			var obj = $.extend(defaults,obj);
			F.fixed(obj)
		}
	})

})(Zepto)