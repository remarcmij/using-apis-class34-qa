const fetch = require('./fetch');

function main() {
  fetch('https://hello.com')
    .then((response) => {
      console.log('Response:', response);
      return fetch(response.nextUrl);
    })
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((response) => {
      console.log('Error:', response.error.message);
      return fetch(response.url);
    })
    .then((response) => {
      console.log('Response:', response);
    });
}

main();
