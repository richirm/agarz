// ==UserScript==
// @name         agarz
// @namespace    http://agarz.com/
// @version      0.0.1
// @description  funcionalidades para agarz
// @author       richirm
// @match        http://agarz.com

// ==/UserScript==
/*jshint -W097 */
/*global $*/

(function () {
	'use strict';

	var head = $('head').html().replace('main17obf.js', 'https://raw.githubusercontent.com/richirm/agarz/master/src/app/main.js'),
		body = $('body').html();

	$('head >, body >').remove();

	$('body').append(body);
	$('head').append(head);

}());