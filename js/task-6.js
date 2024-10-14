function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

console.dir(boxesEl);

createBtn.addEventListener('click', createBtnOnClick);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let markupString = '';
  for (let i = 0; i < amount; i++) {
    markupString += `<div style=" width: ${30 + 10 * i}px; height: ${
      30 + 10 * i
    }px; background: ${getRandomHexColor()}"></div>`;
  }
  return markupString;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function createBtnOnClick() {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    destroyBoxes();
    boxesEl.insertAdjacentHTML('beforeend', createBoxes(inputEl.value));
    inputEl.value = '';
  }
}
