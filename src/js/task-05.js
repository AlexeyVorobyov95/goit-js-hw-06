const input = document.querySelector(`#name-input`);

const output = document.querySelector(`#name-output`);
// console.log(output);

const inputName = () => {
  if (input.value.length > 0) {
    output.textContent = input.value;
  } else {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", inputName);
 
console.dir(input);