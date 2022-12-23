const inputEl = document.querySelector(`#validation-input`);
console.dir(inputEl);
inputEl.addEventListener("blur", () => {
    if (inputEl.value.length === 6) {
        inputEl.classList.add(`valid`);
        
    } else {
        
        inputEl.classList.add(`invalid`);
    }
});