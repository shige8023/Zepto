/*
 *
 * check function
 * author: Liu Yifei
 * date: 2017.1.24
 * email: 1001years@sina.cn
 * 用于input输入内容的校验，如手机号、密码格式、email格式
 * 也可用于客户端类型的检验，如安卓系统、IOS系统、微信客户端
 * 
 * 使用说明：
 * 输入框内容校验：将需要校验的值作为参数传入即可，如$.fn.checkPhone('18141921824');
 * 客户端系统检验：直接调用即可，$.fn.checkIos(),若为IOS系统则返回true；
 * */

(function($) {
	var defaults = {

	};

	$.extend($.fn, {
		checkPhone: function(str) {
			var filter = /^[1][34578][0-9]{9}$/;
			if(filter.test(str)) {
				return true;
			} else {
				return false;
			}
		},
		checkEmail: function(str) {
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(filter.test(str)) {
				return true;
			} else {
				return false;
			}
		},
		checkPassword: function(str) {
			var filter = /^[0-9A-Za-z]{6,20}$/; //6-20位数字密码组合
			if(filter.test(str)) {
				return true;
			} else {
				return false;
			}
		},
		checkWechat: function() {
			var ua = window.navigator.userAgent.toLowerCase();
			return ua.match(/MicroMessenger/i) == 'micromessenger';//微信浏览器
		},
		checkIos: function() {
			var u = navigator.userAgent;
			var isiOS = u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(isiOS) {
				return true;
			} else {
				return false;
			}
		},
		checkAndroid: function() {
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
			if(isAndroid) {
				return true;
			} else {
				return false;
			}
		}
		
	});

})(Zepto)