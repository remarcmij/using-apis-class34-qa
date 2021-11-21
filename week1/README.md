<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- How is it going so far?
- Redo the catwalk exercise, but now with promises.
- Event loop experiments
- Promise experiments
- Go through questions

One break around 13:15.

## Mohamed Abdelhamed

Q1: _hello my question is what is the difference between async function and multi-threading ??_

A1: The browser that hosts the JavaScript engine is multi-threaded and can do multiple things at the same time. The JavaScript engine itself is single-threaded but can initiate tasks to be executed by the multi-threaded browser and be notified (asynchronously) of the results queued up the browser in the event queue.

## Danijel Cvitkusic

Q1: _Should we always use `async/await` syntax if possible and only fallback to `promise.then()` syntax when necessary or is it more nuanced than that?_

A1: For new applications you can choose whatever you like (or what your team agrees on). For existing applications you may need to adapt to whatever form was chosen.

Q2: _How do we handle existing library/package functions that use callbacks, can we convert these to async/await or promise syntax ?_

A2: You can create a new function that wraps a callback-based function into a promise and resolves (or rejects) the promise in the function's callback. For a simple example, see `timer.js`.

Q3: _Do promises always execute only after the rest of the stack has emptied (rest of the code after it has executed), even if the promise can resolve immediately like below?_

```js
new Promise((resolve) => resolve(1)).then((result) => console.log(result));
// Runs before above
console.log(2);
```

A3: Settled promises are queued as (micro)tasks. So their handlers (the functions that you pass to the `.then()` and `.catch()` methods) run asynchronously as soon as the current code has ran to completion. That even holds true for a promise that is immediately resolved.

## Ahmed Hassan

Q1: _what is the difference between Promise.all & Promise.allSettled?_

A1: `Promise.all()` is resolved when all the promises from the promise array are resolved or rejected as soon as one of the promises is rejected (its _all or nothing_).

`Promise.allSettled()` always results in a resolved promise when all promises have been settled (i.e. resolved or rejected). The result of the resolved promise is an array of objects where each object has information on whether the corresponding promise was resolved or rejected and the resolved or rejected value.

See the file `promise-all-vs-settled.js`.

## Christina Fayad

Q1: _My question for this week is regarding the Practice the concepts part on the MAKEME.md .. so the first link provided was so clear & easy to follow, I felt that I really got the concept & that's I was able to implement it through practical example. However, the second link <https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript> left me confused & they used slightly different syntax which really made me list. Plus when we don't get the solution there is no hint or useful error message .. I got stuck on 8/17. If possible I would like to know why they used different syntax & which one we should use & maybe go through some of the examples from the link._

A1: In examples on the Internet you will come across alternate syntax (e.g. anonymous functions using the `function` keyword instead of array functions) or `var` instead of `let` or `const`, etc. This is something you should be prepared to deal with.

## Caglar Kaya

Q1: _In HYF curriculum, a resource mentioned that for asynchronous JavaScript;_

- Using Callbacks is `good`
- Using Promises is `better`
- Using ~~Generators~~ async/await is `awesome`

_But resources in curriculum focus on Promises. So, do we need to learn it additionally or Promises are enough for us?_

A1: Before `async/await` was introduced in JavaScript (2017) some developers and/or libraries used JavaScript _generators_ to make asynchronous code look like synchronous code, a manner simular to what `async/await` can do today. With the introduction of `async/await` there is no longer a need to use generators and, in general, there is no real other use for JavaScriot generators in most applications. Therefore we have not included it in the curriculum.

## Abdulrahman Sadek

Q1: _My question with way is better async or returning promise?In case we need to fetch url from another url like lets say : we have url that give us first 10 pages of something and we need to fetch the other 10 pages how we can use exuctly async/awit in these nasted url?_

A1: See the folder `fetch` for an example illustrating this.

## Said Yeginoglu

Q1: _Is there a way to pass multiple parameters in promises rather than putting them in an array and passing it as a single parameter?_

A1: Functions returning promises as still just functions. A function can only return one value (but which can be an array or an object) and can take multiple arguments through its parameter list.

## Mustafa Sh

Q1: _Hello there, I still don't get what's the best practice to call promises. Should we call them after it's created, or later on? and how should we organize our code in a professional way?_

A1: Whatever comes natural as you develop an app. There is no predescribed way. One approach was demoed when we rebuilt the catwalk example using promises.

## Lydia Samir

Q1: _my question related to ex3 . catching error is the end of the promise or not ? i mean in this exercise it didnt stop after catching the error (Dice rolled out of table)_

A1: A promise by itself does not influence or control the code that the promise is wrapping. If you want the code to stop after the promise is resolved or rejected you need to do that in the code itself. Simply calling `resolve()` or `reject()` does not terminate the wrapped code.

## Alexander Said

Q1: _With "Asynchronous" we can keep the code running. Are there situations when the code in some point will rely on the asynchronous' return? if so how we avoid the blocking then?_

A1: The code is never blocked by a pending promise. The browser can always continue running other tasks. However, a user may not be able to usefully continue with the app if the expected result is not forthcoming. So you could say that the human user is "blocked".

## George Roumieh

Q1: _my question why I use promise.all and can you give me an example to exchange from callback to several promises._

A1: This was demoed during live-coding.

Q2: _use the async-await will cancel the roll of promise and callback ?_

A2: `async/await` is just another tool in our toolbox. You will come across all forms dealing with asynchronous code in the wild and you should master all forms. As said in another question, if you are free to make your choice for a new app then `async/await` will often be a preferred option.

## Daniel Wang

Q1: When a promise is refused, could the promise loop itself until it's resolved? What if a promise couldn't be resolved forever?

A1: When a promise is rejected in a user application it is often best to inform the user of the underlying problem (e.g. a network error) and give the option to retry or cancel. You don't want to do repeated retries and meanwhile leave the user in the dark and waiting for something to happen.

Also, you should take into consideration whether retrying at the time of failure actually has a reasonable chance of success if you retry immediately. If not, there is not much sense to retry at that point.

If however your application is controlling an unmanned voyager on its way to Mars and it needs communicate back to Earth but fails you will want to retry until the battery runs out, maybe switching commmunication channels while retrying or reducing the tranmission rate or whatever makes it work.

## Osama Bazbooz

Q1: Is it mandatory to use setTimeout with promises to make sure that we are settling asynchronously?

A1: If for some reason you want some code to execute after the currently running code has run to completion you can use a `setTimout` with zero delay to push a task on the event queue for immediate execution once the call stack is empty. I wouldn't say it is mandatory, it's just a trick that you could use if there is a need.

Q2: In chaining Multiple Promises, is the execution of the multiple promises going to be sync so the chained multiple promises will execute in the same order?

A1: This was already answered in previous question.
