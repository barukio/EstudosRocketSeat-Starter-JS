let listElement = document.querySelector('#app ul');
let inputELement = document.querySelector('#app input');
let buttonELement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        let linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
} 
renderTodos();
 
function addTodo() {
    let todoText = inputELement.value;

    todos.push(todoText);
    inputELement.value = '';
    renderTodos();
    saveToStorange();
}

buttonELement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorange();
}

function saveToStorange() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}