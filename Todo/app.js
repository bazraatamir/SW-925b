const TodoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector(".list-todo");



add.addEventListener('click',createrTodo)

function createrTodo(){
    text = document.createElement('li');
    text.innerText = TodoIn.value;
    listTodo.appendChild(text)

}
