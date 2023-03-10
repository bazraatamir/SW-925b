let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let Cwidth = canvas.clientWidth = innerWidth;
let Cheigth = canvas.clientHeight = innerHeight;
let x= 100;
let y = 100;

function drawingShapes(){
ctx.beginPath();
ctx.fillStyle = '#FFF';
ctx.fillRect(0,0,Cwidth,Cheigth)
ctx.arc(x+=1, y, 5, 0, Math.PI*2,true);
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke();
ctx.closePath();

setTimeout(drawingShapes,100)
}
drawingShapes()


// x y width heigth







