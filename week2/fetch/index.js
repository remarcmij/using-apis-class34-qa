const URL = 'https://api.github.com/orgs/HackYourFuture/repos';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  return await response.json();
}

function renderData(jsonData) {
  const root = document.querySelector('#root');
  const pre = document.createElement('pre');
  const jsonString = JSON.stringify(jsonData, null, 2);
  pre.textContent = jsonString;
  root.appendChild(pre);
}

function renderError(err) {
  const root = document.querySelector('#root');
  const p = document.createElement('h1');
  p.textContent = err.message;
  root.appendChild(p);
}

async function main() {
  try {
    const jsonData = await fetchData(URL);
    renderData(jsonData);
  } catch (err) {
    renderError(err);
  }
}

window.addEventListener('load', main);
