var utils = (function(){
	return {
		extend: function(o1, o2){
			for(var i in o2)
				if(o1[i] == undefined)
					o1[i] = o2[i];
		}
	}
})();

;(function (_){

	var html = 
	'<div class="m-popup">\
		<div class="pop_head">标题</div>\
		<div class="pop_content"><p>{text}</p></div>\
		<div class="pop_foot">\
			<a class="confirm" href="#">确认</a>\
			<a class="cancel" href="#">取消</a>\
			</div>\
	</div>'

	function Popup(opt){
		this.text = opt.content;
		this.container = opt.container;
		this.init();
	}

	_.extend(Popup.prototype, {
		init: function(){
			this.initDom();
			this.initEvent();
			this.btn = document.getElementById('j-btn');
		},
		initDom: function(){
			var node = document.createElement("div");
			node.innerHTML = html.replace("{text}", this.text);
			this.dom = node.childNodes[0];
		},
		initEvent: function(){
			var cancel = this.dom.getElementsByClassName('cancel')[0];
			cancel.addEventListener('click',function(){
				this.hide();
			}.bind(this));
	
			this.container.style.transition = '.5s';
		},
		hide: function(){
			this.container.removeChild(this.dom);
			this.btnAllow();
		},
		show: function(){
			this.container.appendChild(this.dom);
			this.btnBan();
		},
		btnBan: function(){
			this.btn.disabled = true;
		},
		btnAllow: function(){
			this.btn.disabled = false;
		}
		
	})

window.Popup = Popup;
})(utils);