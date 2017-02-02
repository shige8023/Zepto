/*
 *
 * data access
 * author: Liu Yifei
 * date: 2017.1.24
 * email: 1001years@sina.cn
 * localstorage仅支持IE8+的浏览器，所以用cookie做了兼容
 * 不过cookies的存储大小只有4kb，这点需要注意一下
 * */

(function($) {
	var defaults = {

	};

	var F = {
		cookieWrite: function(cookieName, cookieValue) {
			document.cookie = cookieName + '=' + escape(cookieValue);
			//escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
		},
		cookieGet: function(cookieName) {
			var oCookie = '';
			var aCookie = document.cookie.split('; '); //注意；后还有个空格

			for(var i = 0; i < aCookie.length; i++) {
				var item = aCookie[i].split('=');

				if(item[0] == cookieName) {
					oCookie = unescape(item[1]);
				}
			}
			return oCookie;
		}
	}

	$.extend($.fn, {
		writeData: function(dataName, value) {
			if(window.localStorage) {
				localStorage.setItem('key', value);
			} else {
				F.cookieWrite(dataName, value);
			}
		},
		getData: function(dataName) {
			if(window.localStorage) {
				return localStorage.getItem('key');
			} else {
				return F.cookieGet(dataName);
			}
		}
	});

})(Zepto)