<!-- cSpell:disable -->

# Q&A Week 2

## Today's Agenda

- Questions remaining from week 1 homework
- Revisit promises from week 1 (`promises.ipynb`, `bullet.js`)
- What new topics did you learn this week?
- Async/await examples (`async-await.ipynb`)
- Refactor cat walk with `async/await` (again)
- Fetch (`fetch-livecode`)
- CORS
- JSON (`json.ipynb`)

Break at 13:15

Q&A: see below

## Q&A

### Christina

**Q1:** _Hey everyone, my question is regarding ex1 of week2 homework. When I tried to write the following function as an arrow function, the npm test failed to recognize the async function. I'm not sure if that happened because of the way the test file was written or there is something more to it?_

**A1:** Yes, the unit test expects a function declaration instead of an arrow function. Normally unit tests should not be concerned with such implementation details, i.e. whether a function is defined using a function declaration or as an arrow function. The unit tests for the homework however are designed to give warnings about possible implementation errors (for educational purposes). In this case the unit test did not cater for the possibility that the function declaration was changed into an arrow function as the instructions ask you to complete the function rather than to change the way its declared. From the point of the exercise (and its unit test) it is an uncalled for, unnecessary and evidently breaking change. I would recommend that you revert back to a function declaration so that the unit test passes.

> When making changes in a PR to code that is not your own, you are well advised to restrict yourself to just the required functional modifications. Don't make changes to code that does not need changes simply because you perhaps don't like the style or something similar. You may break things and/or provoke WTF comments from the code owner/reviewer (who may decide to reject your PR for that reason). _Just to be clear, this was **not** the case here_.

**Q2:** _When we need to have chained asynchronous functions, which method is better .. to use .then or use await before calling the async function?_

**A2:**

### Danijel

**Q1:** _At what point should we check/ catch errors when using fetch() and similar async functions. Sometimes I see a fetch wrapped in a try/catch or a .catch() at end of its Promise, but other times the fetch just returns response.json() and lets the calling parent function deal with any errors:_

```js
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const fetchData = async () => {
  // Error check in this function
  try {
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const main = async () => {
  const data = await fetchData();
  console.log(data);
};

main();
```

vs

```js
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const fetchData = async () => {
  const res = await fetch(url);
  return res.json();
};

const main = async () => {
  // Check for errors here
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log('Something went wrong');
  }
};

main();
```

**A1**:
