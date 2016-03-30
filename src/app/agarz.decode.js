var intervalW;

$(document).keypress(function(e){
	if(e.keyCode === 119) {
		if(!intervalW) {
			intervalW = setInterval(function() {
				window.onkeydown({'\x6B\x65\x79\x43\x6F\x64\x65': 87});
				window.onkeyup({'\x6B\x65\x79\x43\x6F\x64\x65': 87});
			},20);
		}
	}
});

$(document).keyup(function(e){
		clearInterval(intervalW);intervalW=null;
});

var html = $.ajax({url:'http://agarz.com/', type: 'GET', success: function(resp) { html = resp}})

$.ajax({
	url: 'http://agarz.com/main41obf.js', 
	type: 'GET', 
	success: function(resp){
		var aaa = resp.replace(/\[/g, 'barra1');
		aaa = aaa.replace(/\]/g, 'barra2');
		$.each(_0xf75d, function(k, v){
			var re = new RegExp('_0xf75dbarra1'+k+'barra2','g');
			if(v == '\n') {
				aaa = aaa.replace(re, '\'enter\'');
			} else {
				aaa = aaa.replace(re, '\''+v.replace(/'/g,'_')+'\'');
			}		
		});
		aaa = aaa.replace(/barra1/g, '[');
		aaa = aaa.replace(/barra2/g, ']');
		console.log(aaa.toString());
	}
});

var head = $('head').html().replace('main17obf.js','https://dl.dropboxusercontent.com/u/65999952/main15obf.js');
var body = $('body').html();

$('head >, body >').remove();

$('body').append(body);
$('head').append(head);