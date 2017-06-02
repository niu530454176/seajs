define(function (require, exports, module) {
	var $ = require('jquery');
	// var Slide = require('./Slide');
	var moment = require('moment');
	// var slidesjs = require('slidesjs');
	var prettify = require('prettify');
	require('../css/header.css');
	prettify.autorun();
	// console.log(moment().format());
	$('.now').html(moment().format('YYYY-MM-DD HH:mm Z'));
	/*var slide = new Slide({
		$target: $('#slide')
	})*/
});