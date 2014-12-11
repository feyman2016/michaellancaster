---
layout: post
title: Ep.2 Data Structures and Algorithms with JS - Lists

excerpt: Ok so let's start get into some topics we haven't been using in the usual JS world. Lists is what I'm going to talk about on this post today. Notice that this is a overview/start point for those that want to learn more about it and use on the future.
---

<div class="intro-series">
    <strong>Be advised!</strong> <br> 
    This post is part of the series: Data Structures and Algorithms with JS therefore before continue to read I suggest you <a href="/blog/javascript-data-structure-algorithms-series-ep1/" title="Data Structures and Algorithms Ep.1">the introduction</a> to this series of posts if you haven't read yet. thanks.
</div>

Ok so let's start get into some topics we haven't been using in the usual JS world. Lists is what I'm going to talk about on this post today. Notice that this is a overview/start point for those that want to learn more about it and use on the future.

### Lists

Answer out and loud what are lists? ... Yes that it. Lists are simply a collection of items by order/or not which could be To-Do list, Grocery shop list, Students list and so on.

Lists can be what you do daily.. e.g:

- Wake up
- Breakfast
- Brush your tooth
- Take a shower
- Go to work

Or either a Grocery shop list

- Carrots
- Broccolis
- Chicken
- Orange Juice

Now in computer programing lists are under the ADT (Abstract Data Type) and you are going to them when you wont perform complex tasks like ordering or search in the list.

The list is an ordered sequence of data and each element in the list can be any data type where you are able to `insert` at beginning or after an element, `append` to the end, `read/modify` element at a position, `remove`, total elements in the list is at `listSize`, `toString` which return a string representation of the list, `toArray` which return an array representation of the list.

<pre><code data-language="javascript">
var arr = []; // arr.length = 0
</code></pre>