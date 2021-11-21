let index = 0;
const simulatedResponses = [
  {
    page: 1,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    nextUrl: 'https://hello.com?page=2',
  },
  // {
  //   fail: true,
  // },
  {
    page: 2,
    items: [11, 12, 13, 14, 15, 16, 17.18, 19, 20],
    nextUrl: 'https://hello.com?page=3',
  },
];

function fetch(url) {
  console.log(`\nRequest URL: ${url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = simulatedResponses[index];
      index += 1;
      // if (response.fail) {
      //   reject(new Error('fetch failed'));
      //   return;
      // }
      resolve(response);
    }, 100);
  });
}

module.exports = fetch;
