function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorChange = document.querySelector(`body`);
const buttonСolorChange = document.querySelector(".change-color");
const nameColorChange = document.querySelector(".color");

buttonСolorChange.addEventListener(`click`, () => {
let randomColor = getRandomHexColor();
bodyColorChange.style.backgroundColor = randomColor;
nameColorChange.textContent = randomColor;
});