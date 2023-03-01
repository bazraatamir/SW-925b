const TodoIn = document.querySelector('#todoIn');
const add = document.querySelector('#addBtn');
const listTodo = document.querySelector(".list-todo");

addEventListener('load',ShowList);

 const todo = class{
   constructor(id,todolist){
      this.id = id,
      this.check = false;
      this.todolist = todolist
   }
 }

 function randomId(){
   let id = Math.random().toString().split('.')[1];
   return id
 }

add.addEventListener('click',createrTodo)

function createrTodo(){
    let TodoList = document.createElement('li');
    let Todotext = document.createElement('input');
    let DltBtn = document.createElement('button');
    let check =document.createElement('button');
    let todoObject = new todo(randomId(),TodoIn.value)

    check.innerHTML = `<i class="fa-solid fa-check"></i>`;
    DltBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    DltBtn.setAttribute('data-id',`${todoObject.id}`);
   check.setAttribute('data-id',`${todoObject.id}`);

    Todotext.setAttribute('readonly','readonly');
    Todotext.value = todoObject.todolist;
    TodoList.appendChild(Todotext);
    TodoList.appendChild(check);
    TodoList.appendChild(DltBtn);
    listTodo.appendChild(TodoList);

   SaveLocal(todoObject);
}
let arr  =[]

function SaveLocal(arg){
   if(localStorage.getItem('todo')===null){
      arr.push(arg)
      localStorage.setItem('todo',JSON.stringify(arr));
   }else{
      let localarr = JSON.parse(localStorage.getItem('todo'));
      localarr.push(arg);
      localStorage.setItem('todo',JSON.stringify(localarr));
      
   }
   
}

function ShowList(){
  let x = JSON.parse(localStorage.getItem('todo'))
  x.forEach(element => {
   let TodoList = document.createElement('li');
   let Todotext = document.createElement('input');
   let DltBtn = document.createElement('button');
   let check =document.createElement('button');
   check.innerHTML = `<i class="fa-solid fa-check"></i>`;
   DltBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
   DltBtn.setAttribute('data-id',`${element.id}`);
   check.setAttribute('data-id',`${element.id}`);
   Todotext.setAttribute('readonly','readonly');
   if(element.check == true){
      Todotext.classList.add('delete');
   }
   Todotext.value = element.todolist;
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
    let deleteEl = parentEl.parentElement;
    let id = parentEl.dataset.id;
    let deleteData = JSON.parse(localStorage.getItem('todo'));
    let deleteArr = deleteData.filter((el)=>{
      return el.id !== id
    });
    localStorage.setItem('todo',JSON.stringify(deleteArr))
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
    let id = parentEl.dataset.id;
    let checkData = JSON.parse(localStorage.getItem('todo'));
    let checked = checkData.map((el)=>{
      if(el.id==id){
         el.check=true;

      }
      return el;
    });
   console.log(checked);
   localStorage.setItem('todo',JSON.stringify(checked));
    check.classList.toggle('delete');
   }
}


//edit button ajiluulj ireh
