let $todoInput; // miejsce gdzie user wpisuje treść zadania
let $alertInfo; // info o braku zadań lub konieczności dodania tekstu
let $addBtn; // przycisk dodaje nowe elementy do listy
let $ulList; // lista zadań
let $newTask; // nowe zadanie

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
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
};

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;

        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
};

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

document.addEventListener('DOMContentLoaded', main);