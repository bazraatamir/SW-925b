let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = innerWidth>innerHeight?innerHeight:innerWidth;
canvas.heigth = innerWidth>innerHeight?innerHeight:innerWidth;
addEventListener('resize',()=>{
    canvas.width = innerWidth>innerHeight?innerHeight:innerWidth;
    canvas.heigth = innerWidth>innerHeight?innerHeight:innerWidth;
})

function drawingShapes(){
    ctx.fillStyle="red"
    ctx.strokeStyle='red';

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(20,100);
    ctx.lineTo(70,100);
    ctx.lineTo(70,20);
    ctx.lineTo(20,20)
    ctx.stroke();
    ctx.fill()
    ctx.closePath();
   
}

drawingShapes()
