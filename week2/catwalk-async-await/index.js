'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
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

function dance(img) {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const dancePos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // TODO convert to async/await
  const loop = () => {
    walk(img, startPos, dancePos)
      .then(() => dance(img))
      .then(() => walk(img, dancePos, stopPos))
      .then(() => loop());
  };

  loop();
}

window.addEventListener('load', catWalk);
