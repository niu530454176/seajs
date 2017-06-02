define(function (require, exports, module) {

	var $ = require('jquery');
	var css = require('../css/header.css');
	function init() {
		$('.header').html('header.js初始化完毕');
	}
	exports.init = init;

});