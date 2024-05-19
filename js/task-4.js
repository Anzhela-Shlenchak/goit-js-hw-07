const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const emailValue = this.elements.email.value.trim();
    const passwordValue = this.elements.password.value.trim();
    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }
    const formValues = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(formValues);

    this.reset();
});
