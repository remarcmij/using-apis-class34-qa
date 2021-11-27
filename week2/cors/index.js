const BASE_URL = 'http://192.168.178.4:3000';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} - ${response.statusText}`);
  }
  return response.json();
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
    const jsonData = await fetchData(BASE_URL + '/modules/4');
    renderData(jsonData);
  } catch (err) {
    renderError(err);
  }
}

window.addEventListener('load', main);
