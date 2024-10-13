const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const emptyName = spanEl.textContent;

inputEl.addEventListener('input', inputOnChange);

function inputOnChange(event) {
  const userName = event.target.value.trim();
  userName === '' ? (spanEl.textContent = emptyName) : (spanEl.textContent = userName);
}
