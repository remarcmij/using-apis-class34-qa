'use strict';

const img = document.querySelector('img');

function walk(startPos, stopPos) {
  let position = startPos;
  const intervalId = setInterval(() => {
    img.style.left = `${position}px`;
    position += 10;
    if (position >= stopPos) {
      clearInterval(intervalId);
    }
  }, 50);
}

function catWalk() {
  const startPos = -img.width;
  const stopPos = window.innerWidth;

  walk(startPos, stopPos);
}

window.addEventListener('load', catWalk);
