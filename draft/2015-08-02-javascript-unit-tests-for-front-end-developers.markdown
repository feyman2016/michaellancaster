---
layout: post
title: Javascript Unit Test for UI developers

excerpt: Unit tests for UI developers is a underground world
---

Unit tests for UI developers is a underground world.

### Where to start

One of the things that helped me was understand the philosophy behind unit tests.
The first question to answer is, why unit test? here's just a few points.

- Reduce bugs (new and/or existing features)
- Serve as documentation
- Improve Software Design (as in architectural manner)
- Reduce fear (you can develop something without afraid to break something else)

Unit tests are meant to be `small` but what I mean by that is, let's say you have a function called `foo` that calls two other functions `fooUno` and `fooDos` each function do something different from another, let's also say that one of those functions inside `foo` function make a XHR request.. You don't want to make the XHR request because it's slow and that XHR might depend in something else from the system, but you still want to use the data from the XHR from the request and this case is very common but as I said you want to keep your tests small.

And a good structure for unit tests is 3A **Arrange, Act, Assert** (not applicable to all scenarios), where Arrange is the set up of the object/function being tested (e.g stub a dependency), Act is when you act on the object being tested (e.g call the function) and Assert where you claim the object. (e.g assert that the function was called with xyz arguments);

### Spies, Stubs & Mocks

Some important unit tests concepts are very important to understand so that way you can know when to use each.

- Spies
- Stubs
- Mocks

**Spies** <br>
The word basically describe what the concept means, you spy on a function and then you can assert your test if the function was called, how many times was called if called, what the parameters was called with and what was returned.

<pre><code data-language="javascript">
describe('Spy', function() {
    it('spy on a function', function() {
        var addSpy = sinon.spy(add());

        addSpy(2, 4);

        expect(addSpy.called).to.be.true;

        addSpy.reset(); // reset spy to it's normal state
    });
});
</code></pre>

**Stubs** <br>
This concept is used to isolate a function from the rest of the App, stubs are going to take place of the component and return consistent results making easier to write tests, stubs are also spies.

<pre><code data-language="javascript">
describe('Stub', function() {
    it('stub function', function() {
        var result;
        var isTruthyStub = sinon.stub(isTruthy()).returns(true);
        var obj = {
            "name": "John Doe",
            "age": 24
        };

        result = person('John Doe', 24);

        expect(result).to.be.deep.equal(obj);

        isTruthyStub.reset(); // reset spy to it's normal state
    })
});
</code></pre>

**Mock** <br>
Mocks are very similar to spies and stubs with the difference you need to define all things that need to happen before you assert and when you are done with all the actions defined you then assert everything happened as planned/defined.

<pre><code data-language="javascript">
describe('Mock', function() {
    it('mock function', function() {
        var multiplyMock = sinon.mock(obj);

        multiplyMock.expects('foo').once();

        obj.foo();

        multiplyMock.verify();
    });
});
</code></pre>

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
















