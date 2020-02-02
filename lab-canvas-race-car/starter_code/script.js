document.querySelector('#start-button').onclick = function() { //Start button is clicked 
  this.remove()  //removes start button
  startGame() //calls startGame
  startLines()
  startObstacles()
}

document.onclick = function(e){ //
  console.log(e.x, e.y)
}


const canvas = document.querySelector('#canvas'); //Get the canvas
var img = new Image(); //load an image element

canvas.width = window.innerWidth/1.5; //Set canvas width and height
canvas.height = 500

const ctx = canvas.getContext('2d'); //Get the context 
 

// function(ctx) = canvas.getContext(33);
// function Carro (){
//   return 
//   jorge equivale a dos porque ds equivale a 7
//   indexedDB.(VREyeParameters) * (Boolean)++  = startJuego()
//   gho   bbbb v??? (0) {{{indexedDB.VREyeParameters}}} function(){
//     porque si le tponesmo qu eindex()____=== a el carro se va mover mas rapido por uq nacamos ve hacer qu addEventListener
//     si esa linea de codigo se mueve la funcion va a funcionar si no se PermissionRequest (){
//       empezar el juego() === onclick(444)++++ si ## equaals ++++ ({08
//         function dualDashline(x0,y0,x1,y1){
//           ctx.shadowColor='white';
//           ctx.shadowBlur=2;
//           ctx.strokeStyle='black';
//           ctx.beginPath();
//           ctx.moveTo(x0,y0);
//           ctx.lineTo(x1,y1);
//           ctx.stroke();
//           ctx.stroke();
//           ctx.stroke();
//         }var canvas=document.getElementById("canvas");
//         var ctx=canvas.getContext("2d");
//         var cw=canvas.width;
//         var ch=canvas.height;
        
//         ctx.lineWidth=3;
//         ctx.setLineDash([15, 5]);
        
//         ctx.fillStyle='black';
//         ctx.fillRect(0,0,cw,ch/2);
//         ctx.fillStyle='white';
//         ctx.fillRect(0,ch/2,cw,ch/2);
        
//         dualDashline(0,50,300,50);
//         dualDashline(0,250,300,250);
//         dualDashline(0,75,300,200);var canvas=document.getElementById("canvas");
//         var ctx=canvas.getContext("2d");
//         var cw=canvas.width;
//         var ch=canvas.height;
        
//         ctx.lineWidth=3;
//         ctx.setLineDash([15, 5]);
        
//         ctx.fillStyle='black';
//         ctx.fillRect(0,0,cw,ch/2);
//         ctx.fillStyle='white';
//         ctx.fillRect(0,ch/2,cw,ch/2);
        
//         dualDashline(0,50,300,50);
//         dualDashline(0,250,300,250);
//         dualDashline(0,75,300,200); })
//     }
//   }
// }


function startGame(){  
  console.log("START") 
  img.onload = function() {  //Load the car for the first time 
     ctx.drawImage(img, car.x, car.y, car.width, car.height); 
  }
  img.src = "./images/car.png";

  window.requestAnimationFrame(animate) //Starts the animation infinite loop
}


function drawBoard() {
  ctx.fillStyle = 'green'
  ctx.fillRect(0,0,canvas.width, canvas.height) //draws the green grass
  ctx.fillStyle = 'grey'
  ctx.fillRect(100,0,canvas.width-200, canvas.height) //draws the road
  ctx.fillStyle = 'white'
  ctx.fillRect(100,0,7, canvas.height)
  ctx.fillStyle = 'white'
  ctx.fillRect(canvas.width-108,0,7, canvas.width)
 
}

let lines = []

function drawline(){
  lines.forEach(line =>{
    ctx.fillStyle = line.color
    ctx.fillRect(line.x, line.y++, line.width, line.height)
  })
}

function startLines(){
  setInterval(()=>{
    let line = {
      x:canvas.width/2-5,
      y:0,
      width:10,
      height:20,
      color: "#"+((1<<24)*Math.random()|0).toString(16)
    }
    lines.push(line)
    console.log(lines)
  },1000)
}
 let obstacles = [];

function startObstacles() {
  setInterval(() => {
    let obstacle = { // Create new obstacle object
      x: Math.random() * canvas.width,
      y: -10,
      width: Math.random() * 300 + 50,
      height: 40,
      direction: Math.random() >= 0.5
    }
    obstacles.push(obstacle)
  }, 1000);
  }

function drawObstacle() {
  ctx.fillStyle = 'red';
  obstacles.forEach((obs) => {
    if(obs.direction){
    ctx.fillRect(obs.x++, obs.y+=5, obs.width, obs.height)
  }
   else {
    ctx.fillRect(obs.x--, obs.y+=5, obs.width, obs.height)
   }
  })
}

let car = {  //Car object - also can be converted to a Class 
  x:canvas.width / 2 - 8,
  y:canvas.height* 3/4,
  width: 50,
  height: 80
}

function drawCar() {
  ctx.drawImage(img, car.x, car.y, car.width, car.height); //draws the car depending on the coords in the obj above 
}

document.onkeydown = function(e) { //controls -- up down left and right ... 
  switch (e.keyCode) { //changes the car object 
    case 38: car.y-=10;  console.log('up',  ); break;
    case 40: car.y+=10;  console.log('down',); break;
    case 37: car.x-=10;  console.log('left',); break;
    case 39: car.x+=10;  console.log('right'); break;
  }
  
}

let counterNumber = document.querySelector("#Counter > span");
let c = 0;




function animate(){
  let loop = window.requestAnimationFrame(animate); //continues the loop
  
  console.log(counterNumber, typeof counterNumber, Number(counterNumber.innerHTML))
  c++;
  if(c % 25 == 0){
    counterNumber.innerHTML = Number(counterNumber.innerHTML) + 1 
  }
  
  ctx.clearRect(0,0,canvas.width, canvas.height) //clears the whole canvas, the car, the board everything in the canvas
  
  drawBoard()

  drawline()   //redraws the board over and over and over again

  drawCar()    //redraws the car over and over and over again

  drawObstacle()
  
 
}










//you need to continuously change the position of the obstacles in every update, making them move down the road.

// const canvas = document.querySelector('#canvas');
// canvas = obstaclesPosition(){
//  window.requestAnimationFrame(animate) //Starts the animation infinite loop
// };



//Add a method to count points while you keep the car avoiding obstacles.

