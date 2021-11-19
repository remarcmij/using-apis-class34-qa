'use strict';

const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const STEP_SIZE_PX = 10;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const img = document.querySelector('img');

function walk(startPos, stopPos, cb) {
  let position = startPos;
  const intervalId = setInterval(() => {
    img.style.left = `${position}px`;
    position += STEP_SIZE_PX;
    if (position >= stopPos) {
      clearInterval(intervalId);
      cb();
    }
  }, STEP_INTERVAL_MS);
}

function dance(cb) {
  const savedSrc = img.src;
  img.src = DANCING_CAT_URL;
  setTimeout(() => {
    img.src = savedSrc;
    cb();
  }, DANCE_TIME_MS);
}

function main() {
  const startPos = -img.width;
  const dancePos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // prettier-ignore
  const catWalk = () => {
    // callback "hell"
    walk(startPos, dancePos, 
      () => dance(
        () => walk(dancePos, stopPos, 
          () => catWalk()))
    );
  };

  catWalk();
}

window.addEventListener('load', main);
