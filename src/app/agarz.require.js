/*global $*/

(function () {
	'use strict';

	var head = $('head').html().replace('main17obf.js', 'https://raw.githubusercontent.com/richirm/agarz/master/src/app/agarz.main.js'),
		body = $('body').html();

	$('head >, body >').remove();

	$('body').append(body);
	$('head').append(head);

}());