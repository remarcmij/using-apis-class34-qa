'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const img = document.querySelector('img');

function walk(startPos, stopPos) {
  return new Promise((resolve) => {
    let position = startPos;
    const intervalId = setInterval(() => {
      img.style.left = `${position}px`;
      position += STEP_SIZE_PX;
      if (position >= stopPos) {
        clearInterval(intervalId);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance() {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function main() {
  const startPos = -img.width;
  const dancePos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  const catWalk = () => {
    walk(startPos, dancePos)
      .then(() => dance())
      .then(() => walk(dancePos, stopPos))
      .then(() => catWalk());
  };

  catWalk();
}

window.addEventListener('load', main);
