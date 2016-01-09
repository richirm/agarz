/*global $*/

(function () {
	'use strict';
	
	console.log(111);
	console.log(window.onkeydown);
	var head = $('head').html().
		replace('<script type="text/javascript" src="main17obf.js"></script>', '<script type="text/plain" src="https://raw.githubusercontent.com/richirm/agarz/master/src/app/agarz.main.js"></script>'),
		body = $('body').html();

	$('head >, body >').remove();

	$('body').append(body);
	$('head').append(head);

}());