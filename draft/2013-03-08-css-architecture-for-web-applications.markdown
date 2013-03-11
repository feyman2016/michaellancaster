---
layout: post
title: CSS architecture for Web Applications.

excerpt: Since I started to develop for Web I had/have a very high concern about how to name my "classes" and at the begin we follow the good practices from W3C right?!
---

Since I started develop for Web I had/have a very high concern about how to name my "classes" and at the begin we follow the "good practices" from W3C and other developers right?!

##how was at the beginning

My first job I had a great senior front end developer that taught me a lot of things and the other developers followed his good practices kind of made for the JS developer and this is how we used to write CSS.

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

Yeah! as you can see we used to use "id's" for everything (95% of the html elements) and the properties were by alphabetical order (nothing wrong with alphabetical order).<br>
This approach using that CSS architecture "id's" has no problem for browser rendering and the Javascript developers concerned not just about performance but make his life easier.

But as a point of view of good CSS architecture wasn't DRY, reusable, modular, and depending on the project this can get pretty messy and heavy. So kids, never do this way ok?!

##Second experience

My second experience with a different way to write CSS architecture was when I worked as a consultant for Chamber of Electric Energy Commercialization in their ongoing big Web Application.

At this point the initial developers started kind of in a good way making like a mixed code between SMACCS and their judgments. <br>

<pre><code data-language="css">
ul.button-group-yellow {
	property: value;
	property: value;
}

ul.button-group-yellow li {
	property: value;
	property: value;
}

ul.button-group-yellow li div {
	property: value;
	property: value;
}

ul.button-group-yellow li div p {
	property: value;
	property: value;
}

ul.button-group-yellow li div p a {
	property: value;
	property: value;
}
</code></pre>

We had a bunch of modular groups but terrible long descendants selectors, tag-qualify and all that is very bad for browser rendering/performance, not scalable and gets/got pretty messy after all.

##What you should know
- CSS is code therefore size and rendering matters.
- Browsers render your CSS going right to left.

<pre><code data-language="css">
#header div ul li p a {
	/* seriously when I saw these cases I just want to cry in some corner eating ice cream */
	/* the browser render go through all your elements starting at the element a to match */
	property: value;
	property: value;
}

#header a {
	/* better than the first example */
	property: value;
	property: value;
}

ul#header {
	/* not good, will be very hard to happen when you have to use tag-qualify */
	property: value;
	property: value;
}

#header {
	/* good for performance but don't forget you want to make your code modular, DRY, scalable */
	property: value;
	property: value;
}

.button {
	/* good practice for performance and CSS architecture  */
	property: value;
	property: value;
}
</code></pre>

- Use DRY methodology, modular groups, scalable.
- Make it well documented (readable for humans not machines).
- Use CSS preprocessors (I prefer SASS) but be aware of long descendants selectors.

##How I suggest and how I'm doing.

Like I said I have been struggling not just to choose class names since EVA..but after a while thinking, looking at others code and trying good practices I decided to go through this path I'm going to show you. (for now, I might change again one day).






