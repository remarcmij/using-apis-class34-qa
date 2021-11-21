'use strict';
/*
1. cat walks from left to center
2. cat pauses and dances
3. cat walks from center to right edge
4. repeat above steps
*/

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let position = startPos;
    const intervalID = setInterval(() => {
      img.style.left = `${position}px`;
      position += STEP_SIZE_PX;
      if (position >= stopPos) {
        clearInterval(intervalID);
        resolve(position);
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve('I danced!');
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector('img');
  const startPos = 0;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  while (true) {
    const result1 = await walk(img, startPos, centerPos);
    console.log(result1);
    const result2 = await dance(img);
    console.log(result2);
    const result3 = await walk(img, centerPos, stopPos);
    console.log(result3);
  }
}

window.addEventListener('load', catWalk);
