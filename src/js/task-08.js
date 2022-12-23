const loginFormEl = document.querySelector(`.login-form`);

console.dir(loginFormEl);

loginFormEl.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    // console.log(password);
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all fields");
    }
    
    console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
});
