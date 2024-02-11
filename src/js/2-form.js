"use strict"


const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

function readFormData(form) {
    const email = form.email.value;
    const message = form.message.value;
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

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

const localFormData = localStorage.getItem(localStorageKey);
if (localFormData){
    const data = JSON.parse(localFormData);
    form.email.value = data.email;
    form.message.value = data.message;
}

// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const object = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
    };
    console.log(object);
    localStorage.removeItem(localStorageKey);
    form.reset();
});
