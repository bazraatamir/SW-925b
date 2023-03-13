let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
const TEIL_COUNT = 17;
const tali_size = canvas.width / TEIL_COUNT;
let x = Math.floor(TEIL_COUNT/2);
let y = Math.floor(TEIL_COUNT/2);
let vx = 0;
let vy = 0;

const move = (e)=>{
    switch (e.key){
        case 'w':
            vy=-1
            vx=0;
            break;
        case "s":
            vy=1;
            vx=0
            break
        case "a":
            vx=-1;
            vy =0;
            break
        case "d":
            vx=1;
            vy=0
            break
    }
        
 }

addEventListener('keydown',move);



Animeted()
function Animeted(){
   drawingFeild();
   drawingSnake();

   x+=vx;
   y+=vy;
   setTimeout(Animeted,1000/9)
   
}
function drawingFeild(){
    for(var i = 0; i<TEIL_COUNT; i++){
        for(var j = 0; j<TEIL_COUNT;j++){
            if((i+j)%2==0){
                ctx.fillStyle="#A2D149";
            }else{
                ctx.fillStyle="#AAD751"
            }
        
            ctx.beginPath();
            ctx.fillRect(i*tali_size,j*tali_size,tali_size,tali_size);
            ctx.closePath();
        }
       

}
}


function drawingSnake(){
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(x*tali_size-tali_size/2,y*tali_size-tali_size/2,tali_size/2,0,Math.PI*2)
    ctx.stroke();
    ctx.fill()
    ctx.closePath();
}
