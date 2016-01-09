/*global $*/
var head = $('head').html()
	.replace('main17obf.js', 'https://dl.dropboxusercontent.com/u/65999952/main15obf.js');

var body = $('body').html();

$('head >, body >').remove();

$('body').append(body);
$('head').append(head);