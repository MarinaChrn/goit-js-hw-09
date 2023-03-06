function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let colorChange;
btnStart.addEventListener("click", () => {
    colorChange = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
});


btnStop.addEventListener("click", () => {
  clearInterval(colorChange);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
});