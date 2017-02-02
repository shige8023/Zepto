/*
 *
 * URL参数的获取和拼接
 * author: Liu Yifei
 * date: 2017.1.18
 * email: 1001years@sina.cn
 * 
 * 使用说明：解析参数：$.fn.resData(key),参数传入所需要解析的key值；
 * 拼接参数：参数为对象，在页面跳转的时候调用，类似于Vue的路由跳转；
 * window.location.href = $.fn.monData({
		page: 'UrlResolve-ceshi2.html',
			data: {
				a: 3,
				b: 2
			}
		})
 * */

(function($) {
	var defaults = {
		page: '',
		data: ''
	};

	$.extend($.fn, {
		/*解析*/
		resData: function(key) {
			var str = window.location.search;
			var aKey = str.split('?')[1].split('&');
			var strData = {};

			for(var i in aKey) {
				strData[aKey[i].split('=')[0]] = aKey[i].split('=')[1];
			}
			return strData[key];

		},

		/*拼接*/
		monData: function(obj) {
			var obj = $.extend(defaults, obj);
			var str = '';
			for(var i in obj.data) {
				str += i + '=' + obj.data[i] + '&';
				
			}
			obj.page += '?' + str.substring(0,str.length-1);
			return obj.page;

		}

	})

})(Zepto)