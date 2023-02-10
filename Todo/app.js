const TodoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector(".list-todo");

addEventListener('load',show)

add.addEventListener('click',createrTodo)

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
    savelocal(TodoIn.value);

}

let arr = []

function savelocal(arg){
   if(localStorage.getItem('todo')==null){
      arr.push(arg)
      localStorage.setItem('todo',JSON.stringify(arr));
   }else{
      let localarr =JSON.parse( localStorage.getItem('todo'));
      localarr.push(arg);
      localStorage.setItem('todo',JSON.stringify(localarr))
     
   }
   

}


function show(){
   let showArr = JSON.parse(localStorage.getItem('todo'))
   showArr.forEach(element => {
      let TodoList = document.createElement('li');
      let Todotext = document.createElement('input');
      let DltBtn = document.createElement('button');
      let check =document.createElement('button');
      check.innerHTML = `<i class="fa-solid fa-check"></i>`
      DltBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      Todotext.setAttribute('readonly','readonly')
      Todotext.value = element;
      TodoList.appendChild(Todotext);
      TodoList.appendChild(check);
      TodoList.appendChild(DltBtn);
      listTodo.appendChild(TodoList);
      
   });
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
