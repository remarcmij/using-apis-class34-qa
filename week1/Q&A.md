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

A1:Browser that hosts the JavaScript engine is multi-threaded and can do multiple things at the same time.

## Danijel Cvitkusic

Q1: _Should we always use `async/await` syntax if possible and only fallback to `promise.then()` syntax when necessary or is it more nuanced than that?_

A1:

Q2: _How do we handle existing library/package functions that use callbacks, can we convert these to async/await or promise syntax ?_

A2:

Q3: _Do promises always execute only after the rest of the stack has emptied (rest of the code after it has executed), even if the promise can resolve immediately like below?_

```js
new Promise((resolve) => resolve(1)).then((result) => console.log(result));
// Runs before above
console.log(2);
```

A3:

## Ahmed Hassan

Q1: _what is the difference between Promise.all & Promise.allSettled?_

A1:

## Christina Fayad

Q1: _My question for this week is regarding the Practice the concepts part on the MAKEME.md .. so the first link provided was so clear & easy to follow, I felt that I really got the concept & that's I was able to implement it through practical example. However, the second link <https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript> left me confused & they used slightly different syntax which really made me list. Plus when we don't get the solution there is no hint or useful error message .. I got stuck on 8/17. If possible I would like to know why they used different syntax & which one we should use & maybe go through some of the examples from the link._

A1:

## Caglar Kaya

Q1: _In HYF curriculum, a resource mentioned that for asynchronous JavaScript;_

- Using Callbacks is `good`
- Using Promises is `better`
- Using ~~Generators~~ async/await is `awesome`

_But resources in curriculum focus on Promises. So, do we need to learn it additionally or Promises are enough for us?_

A1:

## Abdulrahman Sadek

Q1: _My question with way is better async or returning promise?In case we need to fetch url from another url like lets say : we have url that give us first 10 pages of something and we need to fetch the other 10 pages how we can use exuctly async/awit in these nasted url?_

A1:

## Said Yeginoglu

Q1: _Is there a way to pass multiple parameters in promises rather than putting them in an array and passing it as a single parameter?_

A1:

## Mustafa Sh

Q1: _Hello there, I still don't get what's the best practice to call promises. Should we call them after it's created, or later on? and how should we organize our code in a professional way?_

A1:

## Lydia Samir

Q1: _my question related to ex3 . catching error is the end of the promise or not ? i mean in this exercise it didnt stop after catching the error (Dice rolled out of table)_

A1:

## Alexander Said

Q1: _With "Asynchronous" we can keep the code running. Are there situations when the code in some point will rely on the asynchronous' return? if so how we avoid the blocking then?_

A1:

## George Roumieh

Q1: _my question why I use promise.all and can you give me an example to exchange from callback to several promises._

A1:

Q2: _use the async-await will cancel the roll of promise and callback ?_

A2:

## Daniel Wang

Q1: When a promise is refused, could the promise loop itself until it's resolved? What if a promise couldn't be resolved forever?

## Osama Bazbooz

Q1: Is it mandatory to use setTimeout with promises to make sure that we are settling asynchronously?

Q2: In chaining Multiple Promises, is the execution of the multiple promises going to be sync so the chained multiple promises will execute in the same order?
