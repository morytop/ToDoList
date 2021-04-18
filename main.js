let $todoInput; // miejsce gdzie user wpisuje treść zadania
let $alertInfo; // info o braku zadań lub konieczności dodania tekstu
let $addBtn; // przycisk dodaje nowe elementy do listy
let $ulList; // lista zadań
let $newTask; // nowe zadanie
let $popup; // pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; // teskst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn; // przycisk do zamykania popup'a
let $idNumber = 0;

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
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

// nadajemy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBt.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
};

// dodajemy nowy element do listy
const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
};

// tworzymy przyciski edycji, usuwania i "gotowe"
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

// zarządzenie kliknięciami w przyciski
const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if (e.target.closest('button').className === 'edit') {
        editTask(e);
    } else if (e.target.closest('button').className === 'delete')
        console.log('delete');
}

// edycja zadania
const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
}

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Musisz podać jakąś treść!'
    }
}

// zamykanie popup'a
const closePopup = () => {
    $popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', main);