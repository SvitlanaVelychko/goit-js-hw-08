import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
}
const formData = {};

populateForm();

refs.form.addEventListener('input', throttle(onFormInput,500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {

    formData[e.target.name] = e.target.value;

    const localStorageForm = JSON.stringify(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, localStorageForm);
}

function onFormSubmit(e) {
    e.preventDefault();

    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
    const savedForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedForm = JSON.parse(savedForm);
    console.log(parsedForm);

    if (savedForm) {
        refs.email.value = parsedForm.email;
        refs.message.value = parsedForm.message;
    }
}
