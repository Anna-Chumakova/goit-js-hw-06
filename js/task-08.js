const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSendForm);
function onSendForm(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email === "" || password === "") {
        return alert("Все поля должны быть заполнены");
    }
    const formData = {
        email,
        password,
    };
    console.log(formData);


    return formEl.reset();
}




