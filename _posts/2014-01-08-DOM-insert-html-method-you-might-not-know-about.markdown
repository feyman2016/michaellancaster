---
layout: post
title: DOM insert HTML method you might not know

excerpt: Everybody knows/use "innerHTML" to insert HTML but I was looking at the MDN website jumping between Web API's I did not know and one of them got my attention it's called insertAdjacentHTML..
---

Everybody knows/use "innerHTML" to insert HTML but I was looking at the MDN website jumping between Web
API's when I saw this DOM method called insertAdjacentHTML..it's "innerHTML" brothers but cooler and faster.

Here you can compare the performance between "innerHTML" and "insertAdjacentHTML" <a href="http://jsperf
.com/insertadjacenthtml-perf/3" target="_blank" title="innerHTML vs insertAdjacentHTMl">here</a> and gets better
its <strong>supported in all browsers</strong>.

Besides the performance another difference is that "innerHTML" will overwrite the content inside the element when
"insertAdjacentHTML" will add to the specified position.

It's been out there for a while now even John Resig has an <a href="http://ejohn.org/blog/dom-insertadjacenthtml/"
target="_blank" title="insertAdjacentHTML post John Resig">post</a> about it back in 2008.

It's very simple to use you are going to need to pass one of the positions (below) and then pass the content.

#### Positions
- "beforebegin" (insert before the element)
- "afterend" (insert after the element)
- "afterbegin" (insert inside element after begin)
- "beforeend" (insert inside element before end)

Let's say we have a method that do the job for us just passing the "position" and where

<pre><code data-language="javascript">
(function() {
	window.App = window.App || {};

	window.App = {
		insertElement: function(where, content) {
			var elDiv = document.getElementById('wrapper');
				elDiv.insertAdjacentHTML(where, content)
		}
	}
})(window);

var content1 = '<p id="ct1">this is a paragrag a "beforebegin" element</p>';
var content2 = '<p id="ct2">this is a paragrag a "afterbegin" element</p>';
var content3 = '<p id="ct3">this is a paragrag a "beforeend" element</p>';
var content4 = '<p id="ct4">this is a paragrag a "afterend" element</p>';

App.insertElement('beforebegin', content1);
App.insertElement('afterbegin', content2);
App.insertElement('beforeend', content3);
App.insertElement('afterend', content4);
</code></pre>

Here's a example how it works <a href="http://jsfiddle.net/ftZyn/" target="_blank" title="how insertAdjacentHTMl works">link</a>.

Enjoy the tip.