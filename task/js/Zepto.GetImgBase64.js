/*
 *
 * IMG转base64
 * author: Liu Yifei
 * date: 2017.1.31
 * email: 1001years@sina.cn
 * 
 * 使用说明：
 * $.fn.getImgBase64({
		id: 'aaa',   //目标控件的ID
		quality: 1,   //压缩质量，  0-1  默认0.8
		success:function(dataUrl){
						
		}  //img成功转为base64后的回调函数
	});
 * */

(function($) {
	var defaults = {
		id: '',
		quality: 0.8,
		success: function(result) {
			console.log(result);
			return result;
		}
	};

	var F = {
		getImg: function(obj) {
			var oImg = document.getElementById(obj.id).files[0];
			var rFilter = /^(image\/jpeg|image\/png)$/i;
			if(!rFilter.test(oImg.type) && oImg.type != '') {
				alert("非图片格式！", 1000);
				return;
			}

			var URL = window.URL || window.webkitURL;
			var src = URL.createObjectURL(oImg);
			var img = new Image();
			img.src = src;
			//console.log(oImg);

			img.onload = function() {
				var dataurl = F.Img64(img);
				obj.success(dataurl);
			}

		},
		Img64: function(oImg) {

			var canvas = document.createElement('canvas');
			//document.body.appendChild(canvas);
			var ctx = canvas.getContext('2d');
			canvas.width = oImg.width;
			canvas.height = oImg.height;
			ctx.drawImage(oImg, 0, 0);
			base64 = canvas.toDataURL(0.8);
			return base64;
		}
	}

	$.extend($.fn, {
		getImgBase64: function(obj) {
			var obj = $.extend(defaults, obj);
			F.getImg(obj);
		}

	})

})(Zepto)