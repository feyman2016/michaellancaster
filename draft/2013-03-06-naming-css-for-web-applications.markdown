---
layout: post
title: How I'm naming CSS for Web Applications

excerpt: Since I started to develop for Web I had/have a very high concern about how to name my "classes" and at the start we follow the good practices from W3C right?!
---

Since I started to develop for Web I had/have a very high concern about how to name my "classes" and at the begin we follow the good practices from W3C and other developers right?!

##how was at the beginning

My first job I had a great senior front end developer that taught me a lot of things and the other developers followed his good practices kind of made for the JS developer.
<br>
So this is how we used to write CSS

<pre><code data-language="css">
#header {
	propertyA: value;
	propertyB: value;
	propertyC: value;
	propertyD: value;
}

#logo {
	propertyA: value;
	propertyB: value;
	propertyC: value;
	propertyD: value;
}

#menu {
	propertyA: value;
	propertyB: value;
	propertyC: value;
	propertyD: value;
}

#search {
	propertyA: value;
	propertyB: value;
	propertyC: value;
	propertyD: value;
}

#bt-yellow {
	propertyA: value;
	propertyB: value;
	propertyC: value;
	propertyD: value;
}
</code></pre>

As you can see we used to use "id's" for everything and the properties were by alphabetical order (nothing wrong with alphabetical order).
That approach had no problem for the Javascript developers that was concern not just about performance but make his life easier.

When a Web app is designed to be on Desktop and it sees on mobile the differences between these two devices it shows are very clear for the user, the user interaction like "click" turns to be emulated as "touch events", the screen-size as iPhone is 320x356 pixels, the mobile viewport 960px, performance
So I'll approach the basic development of mobile web apps focusing on iOS device.

##Viewport and screensizes


##Include in this post
- show classes at the beginning
- show good practices
- Show the new way to name classes