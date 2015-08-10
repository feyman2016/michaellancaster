---
layout: post
title: Javascript Unit Test for UI developers

excerpt: Unit tests for UI developer is a underground world, not everyone knows about it and nobody knows who does Unit Test code.
---

Unit tests for UI developer is a underground world, not everyone knows about it and nobody knows who does Unit Test code. <br>

### My use case

I haven't done any real App unit tests, only trivial things like is something true/false and so on but last month I was assigned to write unit tests for a project with LOC (lines of code) around 25k lines of Javascript.

 I was working on it so I knew that my trivial knowledge in Unit Tests would not work, I had 3 days to get up to speed so I started on a Friday then spent sometime during the weekend and Monday morning researching about it.

I found nothing very conclusive to help me get up to speed fast, so I decided to write this post to get you up to speed in Unit Tests, but after reading different sources and listen to different people I had enough information to get started.

### Where to start

The first thing that I would say that helped me was know the philosophy behind the unit tests.

So why unit test? here's some points.

- Prevent bugs in new and/or old features
- Server as

First thing that will help you think about unit tests is `test small`, when I started writing my first unit test what I did was take a function/method and test everything inside this function/method in a single unit test