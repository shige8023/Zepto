/*
 *
 * IMG转base64
 * author: Liu Yifei
 * date: 2017.2.1
 * email: 1001years@sina.cn
 * 
 * 使用说明：
 * $.fn.getImgBase64.2({
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


	$.extend($.fn, {
		getImgBase64: function(obj) {
			var obj = $.extend(defaults, obj);
			var oImg = document.getElementById(obj.id).files[0];
			var rFilter = /^(image\/jpeg|image\/png)$/i;
			if(!rFilter.test(oImg.type) && oImg.type != '') {
				alert("非图片格式！", 1000);
				return;
			}

			var reader = new FileReader();
			reader.onload = function(e){
				var dataurl = e.target.result;
				console.log(dataurl);
				obj.success(dataurl);
			}
			reader.readAsDataURL(oImg);
		}

	})

})(Zepto)