define(function (require, exports, module) {

	var $ = require('jquery');

	function init() {
		$('.container').html('container.js初始化完毕');
		console.log('container.js初始化了');
	}
	exports.init = init;

});