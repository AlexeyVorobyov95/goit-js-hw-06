const counterValue = document.querySelector(`#value`);

const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
// console.log(btnDecrement);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
// console.log(btnIncrement);

let value = 0;

btnIncrement.addEventListener(`click`, (addNumber) => {
    value += 1;
    counterValue.textContent = value;
});

btnDecrement.addEventListener(`click`, (deleteNumber) => {
    value -= 1;
    counterValue.textContent = value;
});

   
