





var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//
//
var c = canvas.getContext('2d');
//
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 300, 100, 600);
// c.fillStyle = 'rgba(0, 255, 0, 0.1)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(300, 300, 100, 600);
// console.log(canvas);
//
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// for (var i = 0; i < 3; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }
// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5 ) * 10;
// var radius = 30;









// BOUNCING CIRCLES

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
// var minRadius = 2;
var colorArray = [
  '#D42B00',
  '#E9F0F7',
  '#AEC5D6',
  '#223040',
  '#101D29'
]

window.addEventListener('mousemove',function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})
window.addEventListener('resize', function(event){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})


function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();

  }

  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;


    // interactivity

    if (mouse.x - this.x < 20 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 20 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius){
        this.radius += 1;
      }
    }
    else if(this.radius > this.minRadius){
        this.radius -= 1;
    }
    this.draw();
  }
}



var circleArray = [];



console.log(circleArray);

function init(){
  circleArray = [];
  for (var i = 0; i < 500; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight -radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5 ) * 2;
    var radius = Math.random() * 10 + 1;


    circleArray.push(new Circle(x, y, dx, dy, radius));

  }
}



function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }


}

animate();
init();
