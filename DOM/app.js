next = document.querySelector('#next');
next.addEventListener('click',Next);
function Next(){
    slider(1)
    console.log("dsds")
}
let count = 0;
function slider(arg){
    let slides = document.querySelectorAll('.child');
    slides.forEach((element)=>{
        element.style.display="none"
    })
    count+=arg
    slides[count].style.display="block";

}