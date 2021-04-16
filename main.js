let $todoInput; // miejsce gdzie user wpisuje treść zadania
let $alertInfo; // info o braku zadań lub konieczności dodania tekstu
let $addBtn; // przycisk dodaje nowe elementy do listy
let $ulList; // lista zadań

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// pobieramy elementy
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

// nadajemy nasłuchiwanie
const prepareDOMEvents = () => {};

document.addEventListener('DOMContentLoaded', main);