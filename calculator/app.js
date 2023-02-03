const Inp = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

numbers.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let targetEl = e.target
        Inp.value += targetEl.innerText
    })
})
operators.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let targetEl = e.target;
        Inp.value += targetEl.innerText
    })
})

equal.addEventListener('click',()=>{
    Inp.value = eval(Inp.value)
})