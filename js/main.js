define(function (require, exports, module) {

	console.log('我是js程序');
	var header = require('./header');
	var container = require('./container');
	var footer = require('./footer');
	header.init();
	container.init();
	footer.init();

});