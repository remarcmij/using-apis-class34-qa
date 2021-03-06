// ! What will be printed to the console and in what order

function log(message) {
  console.log(message); // place breakpoint here
}

log('starting');

setTimeout(function timeout_1() {
  log('timeout 1');
}, 0);

setTimeout(function timeout_2() {
  log('timeout 2');
}, 0);

Promise.resolve() // try reject() too
  .then(function then_1() {
    log('then 1');
  })
  .then(function then_2() {
    log('then 2');
  });

log('ending');
