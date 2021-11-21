function wait(message, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('resolving', message);
      resolve(message);
    }, delay);
  });
}

const promises1 = [wait('first', 10), wait('second', 200), wait('third', 100)];
Promise.all(promises1).then((results) => {
  console.log(results);
});

// const promises2 = [wait(), wait('fail'), wait()];
// Promise.all(promises2)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const promises3 = [wait(), wait(), wait()];
// Promise.allSettled(promises3)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err.message); // never gets here
//   });

// const promises4 = [wait(), wait('fail'), wait()];
// Promise.allSettled(promises4)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err.message); // never gets here
//   });
