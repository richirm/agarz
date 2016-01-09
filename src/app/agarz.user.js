/**
  The MIT License (MIT)

  Copyright (c) 2015 Jeppe Rune Mortensen

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// ==UserScript==
// @id              agarz
// @name            agarz extras
// @namespace       http://www.facebook.com/richirm
// @version         0.0.7
// @author          richirm
// @description     Agrega funcionalidades para agarz
// @icon            https://raw.githubusercontent.com/richirm/agarz/master/src/assets/img/t%26p.png
// @domain          http://www.facebook.com/richirm
// @match           http://agarz.com/
// @include         http://agarz.com/
// @grant           none
// @updateURL       https://raw.githubusercontent.com/richirm/agarz/master/src/app/agarz.user.js
// @downloadURL     https://raw.githubusercontent.com/richirm/agarz/master/src/app/agarz.user.js
// @run-at          document-end
// @priority        9001
// @contributionURL https://github.com/richirm/agarz/wiki/Donate
// ==/UserScript==

// The source code of agarz can be found at https://github.com/richirm/agarz/
//

(function () {
	'use strict';
	
	console.log('agarz');
	
	var intervalMain = setInterval(function() {
		if(!!window.onkeydown) {
			setTimeout(function() {
				var head = $('head').html().
					replace('<script type="text/javascript" src="main17obf.js"></script>', '<script type="text/plain" src="https://raw.githubusercontent.com/richirm/agarz/master/src/app/agarz.main.js"></script>'),
					body = $('body').html();

				$('head >, body >').remove();

				$('body').append(body);
				$('head').append(head);
			}, 500);
			clearInterval(intervalMain);
		}
	}, 200);

}());