"use strict"

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function readFormData(form) {
    const message = form.message.value;
    const email = form.email.value;
    return {
        message,
        email,
    };
}

form.addEventListener("input", (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, jsonData);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    form.reset();
});










// const localData = JSON.parse(localStorage.getItem(localStorageKey));
// console.log(localData);

// const rawData = localStorage.getItem(localStorageKey);
// if (rawData){
//     const data = JSON.parse(rawData);
//     form.email.value = data.email;
//     form.message.value = data.message;
// }
