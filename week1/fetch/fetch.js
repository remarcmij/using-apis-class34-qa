let index = 0;
const data = [
  {
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    nextUrl: 'https://hello.com?page=2',
  },
  {
    pages: [11, 12, 13, 14, 15, 16, 17.18, 19, 20],
    nextUrl: 'https://hello.com?page=3',
  },
];

function fetch(url) {
  console.log(`\nRequest URL: ${url}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = data[index];
      index += 1;
      resolve(response);
    }, 100);
  });
}

module.exports = fetch;
