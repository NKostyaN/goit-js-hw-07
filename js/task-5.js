function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const widgetBtn = document.querySelector('.change-color');

widgetBtn.addEventListener('click', widgetBtnOnClick);

function widgetBtnOnClick() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  spanEl.style.color = color;
  bodyEl.style.background = color;
}
