---
layout: post
title: Javascript Unit Test for UI developers

excerpt: Unit tests for UI developer is a underground world, not everyone knows about it and those who know doesn't talk about
---

Unit tests for UI developer is a underground world, not everyone knows about it and those who know doesn't talk about

### Where to start

The first thing that I would say helped me was try understanding the philosophy behind unit tests.
So why unit test? here's just a few points.

- Reduce bugs (new and/or existing features)
- Server as documentation
- Improve Software Design (as in architectural manner)
- Reduce fear (you can develop something without afraid to break something else)

Also, Unit tests are meant to be `small` but what I mean by that is, let's say you have a function called `foo` that calls two other functions `fooUno` and `fooDos` each function do something different from another, let's also say that one of those functions inside `foo` function make a request.. You won't want to make the request for this reason, the request is slow that request might depend in something else, but you still want the data that come from that request and this case is very common and as I said you want to keep your test small, but how to do that if foo need those calls to work properly.

### Spies, Stubs & Mocks

Some important unit test concept to understand and know when to use them are...

- Spies
- Stubs
- Mocks

**Spies** <br>
The word basically describe what the concept means, you spy on a function and then you can assert your test if the function was called, how many times was called if called, what the parameters was called with and what was returned.

**Stubs** <br>
This concept is used to isolate a function from the rest of the App, stubs are going to take place of the component and return consistent results making easier to write tests, stubs are also spies.

**Mock** <br>
Mocks are very similar to spies and stubs with the difference you need to define all things that need to happen before you assert and when you are done with all the actions defined you then assert everything happened as planned/defined.

### What tools to use

Javascript ecosystem isn't like Java, .Net, C++ and other languages with established frameworks/tools for unit tests, in Javascript you will find a lot of not well established frameworks/tools, the good part is that you will have options that suits you.

In this article I'm going to introduce you to the most well established framework/tools.

**Karma** <br>
Is a test runner by Google/Angular team created to increase developer productivity helping on setting up the environment for testing, with features like tests in real browser, test debugging, etc.

**Mocha** <br>
I couldn't explain better than the website, Mocha is a JavaScript test framework running on Node.js and the browser, making asynchronous testing simple. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

**Chai** <br>
Chai is a BDD/TDD assertion library which has several styles assert, should or expect, this makes very flexible for the developer to express the unit test.

**Sinon** <br>
Is the library that implements stubs, spies, mock and more features like fake XHR and server.
















