'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const img = document.querySelector('img');

function walk(startPos, stopPos) {
  let position = startPos;
  const intervalId = setInterval(() => {
    img.style.left = `${position}px`;
    position += STEP_SIZE_PX;
    if (position >= stopPos) {
      clearInterval(intervalId);
    }
  }, STEP_INTERVAL_MS);
}

function main() {
  const startPos = -img.width;
  const stopPos = window.innerWidth;

  walk(startPos, stopPos);
}

main();
