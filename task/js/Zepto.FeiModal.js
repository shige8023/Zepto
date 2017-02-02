/*
 *
 * Zepto模态框
 * author: Liu Yifei
 * date: 2017.1.19
 * email: 1001years@sina.cn
 * 
 * 使用说明：
 * 弹窗样式可以自行定义，只需更换Zepto.FeiModal.css文件即可；
 * $.fn.flashModal(str),为闪现框，提示非重要信息，参数为提示内容；
 * $.fn.tipsModal(str,obj)，为带有用户交互效果的提示框，str为提示内容，obj为自定义参数，可控制弹框的title和确定取消按钮即按钮的事件；
 * obj = {
 * 	    modalTip: '温馨提示',  //title
		trueBtn: '确定',    //按钮1
		falseBtn: '取消',   //按钮2
		trueFn: function() {},   //按钮1对应的事件
		falseFn: function() {}   //按纽2对应的事件
 * }
 * $.fn.tipsModal(str,obj)，重要信息的提示框，用户只能点击‘知道了’按钮，若不点击，5s后自动关闭，str为提示内容
 * */

(function($) {

	var defaults = {
		modalTip: '温馨提示',
		trueBtn: '确定',
		falseBtn: '取消',
		trueFn: function() {},
		falseFn: function() {}
	};

	var F = {
		overlay: function() {
			var overlayHTML = $("<div id='overlay-modal'></div>");
			if($('#overlay-modal').length == 0) {
				$('body').append(overlayHTML);
			}
		},
		flash: function(str) {
			var flashModalHTML = $("<div id='flashModal'></div>");
			if($('#flashModal').length == 0) {
				$('body').append(flashModalHTML);
			}
		},
		tipsM: function() {
			var tipsModalHTML = $('<div id="tipsModal"><h4></h4><p></p><button id="trueBtn"></button><button id="falseBtn"></button></div>');
			if($('#tipsModal').length == 0) {
				$('body').append(tipsModalHTML);
			}
		},
		tipsMs: function() {
			var tipsModalsHTML = $('<div id="tipsModals"><h4></h4><p></p><button></button></div>');
			if($('#tipsModals').length == 0) {
				$('body').append(tipsModalsHTML);
			}
		}
	}

	$.extend($.fn, {
		flashModal: function(str) {
			F.overlay();
			F.flash();

			$('#flashModal').text(str).css({
				'display': 'block'
			}).addClass('animated zoomIn');

			setTimeout(function() {
				$('#flashModal').css({
					'display': 'none'
				})
			}, 3000)
		},
		tipsModal: function(str, obj) {
			var obj = $.extend(defaults, obj);
			F.overlay();
			F.tipsM();

			$('#tipsModal').css({
				'display': 'block'
			}).addClass('animated zoomIn');
			$('#tipsModal h4').text(obj.modalTip);
			$('#tipsModal p').text(str);
			$('#trueBtn').text(obj.trueBtn);
			$('#falseBtn').text(obj.falseBtn);

			$('#trueBtn').on('tap', function() {
				$('#overlay-modal').css({
					'display': 'none'
				});
				$('#tipsModal').css({
					'display': 'none'
				})
				obj.trueFn();
			});
			$('#falseBtn').on('tap', function() {
				$('#overlay-modal').css({
					'display': 'none'
				});
				$('#tipsModal').css({
					'display': 'none'
				})
				obj.falseFn();
			})

		},
		tipsModals: function(str) {
			var obj = $.extend(defaults, obj);
			var num = 5;

			F.overlay();
			F.tipsMs();

			$('#tipsModals').css({
				'display': 'block'
			}).addClass('animated zoomIn');
			$('#tipsModals h4').text(obj.modalTip);
			$('#tipsModals p').text(str);
			$('button').text('知道了(' + num + 's)');

			var timer = setInterval(function() {
				num--;
				$('button').text('知道了(' + num + 's)');
				if(num == -1) {
					$('#overlay-modal').css({
						'display': 'none'
					});
					$('#tipsModals').css({
						'display': 'none'
					})
					clearInterval(timer);
				}
			}, 1000)

			$('button').on('tap', function() {
				$('#overlay-modal').css({
					'display': 'none'
				});
				$('#tipsModals').css({
					'display': 'none'
				})
				clearInterval(timer);

			});

		}

	})

})(Zepto)

