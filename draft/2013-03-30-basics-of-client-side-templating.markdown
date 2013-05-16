---
layout: post
title: Starting with GruntJS "The basics"

excerpt: Have you ever hear "Good developers are lazy developers"? So Yeah, who never does repetitive tasks? Doing those type of tasks make you stop to do what you
do best. That is code, GruntJS helps you "a lot" with those really boring and repetitive tasks "Automation, automation, automation".
---

Have you ever hear "Good developers are lazy developers"? So Yeah, who never does repetitive tasks? Doing those type of tasks make you stop to do what you
do best. That is code, GruntJS helps you "a lot" with those really boring and repetitive tasks "Automation, automation, automation".

GruntJS build using JS in Particular NodeJS and makes very easy to use to those familiar with this beautiful programming language called Javascript.
My goal here is to help you start set up and starting the basic to get start use on your next project
Without further due let's do it!

## Who uses client side templating?!

- Linkedin (Dust.js)
- USAToday (Underscore.js)
- Walmart Mobile (Underscore.js)
- Hulu (Handlebars.js)
- Groupon (Mustache.js)
- And many, many others.

## Server - Side templating (the common way)

So as I mentioned before back end technologies like Java, Ruby, PHP.. has being used to render the data from the back to the the client side and this approach consists in literally render the on the server using one of those technologies and through into the client - side.

Two things are very clear to me. First we have to consume the server (imagine if you have to render lots of time), Second is the bandwidth request/load so the template and the data has to be loaded into the client side (slow and request more bandwidth).

## Client - Side templating (the new kid in the block?!)

The client side consists in remove the hard work from the server (making the servers cost less expansive) and the back end side and add to a very, very common technologies called Javascript that renders in each users browsers So no hard work to the server rendering template.

The client side template will just use the data request from the database using another very known technology json and then it you will render in the users browser

## Data JSON example

<pre><code data-language="json">
{
	"client": {
		"name": "Michael lancaster",
		"name": "John Due"
	}
	"occupation": {
	    "description": "Front End Engineer",
		"description": "Jornalist"
	},
}
</code></pre>

<br/>

This is very human readable right?!

## Be aware of..

- Heavy rendering on the users side (devices are not that good as you think they are).
- Organization (you are going to use javascript and make separate data from the)



When a Web app is designed to be on Desktop and it sees on mobile the differences between these two devices it shows are very clear for the user, the user interaction like "click" turns to be emulated as "touch events", the screen-size as iPhone is 320x356 pixels, the mobile viewport 960px, performance
So I'll approach the basic development of mobile web apps focusing on iOS device.

##Viewport and screensizes


##Include in this post
- Network connection speedy.
- Device Baterry and memory.
- Retina Display