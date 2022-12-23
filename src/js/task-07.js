const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);
console.dir(inputEl);
const textResizing = () => {
    textEl.style.fontSize = inputEl.value + "px";
}


inputEl.addEventListener('input', textResizing);