function wait(successOrFail = 'success', delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (successOrFail === 'success') {
        return resolve('Success!');
      }
      reject(new Error('Failed!'));
    }, delay);
  });
}

// const promises1 = [wait(), wait(), wait()];
// Promise.all(promises1)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

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
