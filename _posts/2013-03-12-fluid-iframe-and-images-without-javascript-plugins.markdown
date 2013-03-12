---
layout: post
title: Fluid iframe and images without use of javascript.

excerpt: Simple technique to make fluid iframes and images without use of javascript or plugins
---

Simple technique to make fluid iframes and images without use of javascript or plugins. Using this technique we have more gains in performance and simplicity.

This is a technique of positioning a element inside of another using "position: absolute;" for the "child" and "position: relative;" for the "wrap".

(ps: Depending on your case I suggest you set height for images).

##HTML

<pre><code data-language="html">
<div class="fluidMedia">
	<iframe src="" frameborder="0"> </iframe>
</div>
</code></pre>

##CSS

<pre><code data-language="css">
.fluidMedia {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
}

.fluidMedia iframe {
	position: absolute;
	top: 0; 
	left: 0;
	width: 100%;
	height: 100%;
}
</code></pre>

Cheers!