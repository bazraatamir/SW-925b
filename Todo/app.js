const TodoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector(".list-todo");

add.addEventListener('click',createrTodo)
var x = "hello"
function createrTodo(){
    let TodoList = document.createElement('li');
    let Todotext = document.createElement('input');
    let DltBtn = document.createElement('button');
    let check =document.createElement('button');
    check.innerHTML = `<i class="fa-solid fa-check"></i>`
    DltBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    Todotext.setAttribute('readonly','readonly')
    Todotext.value = TodoIn.value;
    TodoList.appendChild(Todotext);
    TodoList.appendChild(check);
    TodoList.appendChild(DltBtn);
    listTodo.appendChild(TodoList);
}

listTodo.addEventListener('click',Dlt);

function Dlt(e){
   let targetEl = e.target;
   if( targetEl.className == "fa-solid fa-trash"){
    let parentEl = targetEl.parentElement;
    let deleteEl = parentEl.parentElement
    deleteEl.remove()
   }
}

listTodo.addEventListener('click',Check);

function Check(e){
   let targetEl = e.target;
   if( targetEl.className == "fa-solid fa-check"){
    let parentEl = targetEl.parentElement;
    let elementP = parentEl.parentElement;
    let check = elementP.children[0];
    check.classList.toggle('delete');
   }
}


//edit button ajiluulj ireh
