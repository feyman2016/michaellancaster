---
layout: post
title: Ep.2 Data Structures and Algorithms with JS - Lists

excerpt: Let's get start and see how data structures can help us design better software solutions...today I'm going to talk briefly about Lists
---

<div class="intro-series">
    <strong>Be advised!</strong> <br> 
    This post is part of the series: Data Structures and Algorithms with JS therefore before continue to read I suggest you <a href="/blog/javascript-data-structure-algorithms-series-ep1/" title="Data Structures and Algorithms Ep.1">the introduction</a> to this series of posts if you haven't read yet. thanks.
</div>

Let's get start and see how data structures can help us design better software solutions...today I'm going to talk briefly about Lists

### Lists

Answer out and loud what are lists? ... Yes that's it. Lists are simply a collection of items by order/or not which could be To-Do list, Grocery shop list, books list, Phone number list and so on.

In computer programing lists are under the ADT (Abstract Data Type) category and are useful when search and sorted order **is not** in need which otherwise would perform a slow and complex data structure design.

The list is an ordered sequence of data and each element in the list can be any data type where you are able to `insert` at beginning or after an element, `append` to the end, `read/modify` element at a position, `remove`, total elements in the list is at `listSize`, `toString` which return a string representation of the list, `toArray` which return an array representation of the list.

<pre><code data-language="javascript">
var arr = []; // arr.length = 0
</code></pre>