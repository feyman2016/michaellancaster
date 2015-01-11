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

Answer out and loud what are lists? ... Yes that's it. We all intuitively understand what lists are but to be more clear Lists are simply a collection of items therefore a To-Do list, Grocery shop list, book list, Phone number list and so on.

In computer programing Lists are under the ADT (Abstract Data Type) category and can have order/or not (each element has your position) where the element can be duplicated or there's no restrictions on different data types but usually assumed to have the same data type so lists are useful when search and sorted order **isn't** in need which otherwise would perform a slow and complex data structure design.

A list is said to be `empty` when it contains no elements. The number of elements currently stored is called the `length` of the list. The beginning of the list is called the `head`, the end of the list is called the `tail`.

The basic operations we want on a list is to increase and decrease in size adding and removing new elements..We also want to add or remove elements on any position of the list.. access the element value either to just read or change it.. Access the next or prev based on the current element.. we also want to be able to create new lists or clear one.

So here's our actions.

- `position` current position in the list where any action will take place
- `currPos` return the position of the current element
- `clear` remove all elements of the list
- `insert` an element at any position without removing another element
- `append` an element to the end of the list
- `remove` an element from the list
- `length` number of elements in the list
- `find` an element in the list and return the position of the element
- `contains` an element in the list return boolean
- `front` set current position to first element in the list
- `end` set current position to last element in the list
- 'prev' set the current position one step left of the current position, no change if already at beginning
- 'next' set the current position one step right of the current position, no change if already at end
- `moveTo` move current position to specified position
- `to String` return string representation of the list

<pre><code data-language="javascript">
var arr = []; // arr.length = 0
</code></pre>