define(function (require, exports, module) {

	var $ = require('jquery');
	function init() {
		$('.footer').html('footer.js初始化完毕');
	}
	exports.init = init;

});