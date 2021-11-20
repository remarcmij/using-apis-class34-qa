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
    .catch((err) => {
      console.log('Error:', err.message);
    });
}

main();
