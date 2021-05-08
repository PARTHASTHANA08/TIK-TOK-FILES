var hr,hrAngle
var min,minAngle
var sec,secAngle
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 
  translate(400,200);
  hr=hour();
  hrAngle = map(hr%12,0,12,0,360)
  push()
  stroke("red")
  rotate(hrAngle)
  
  line(0,0,50,0)
  pop()
  stroke("red")
  arc(0,0,150,150,0,hrAngle)
  
  min=minute();
  minAngle = map(0,60,0,360)
  push()
  stroke("blue")
  rotate(minAngle)
  line(0,0,100,0)
  pop()
  stroke("blue")
  arc(0,0,200,200,0,minAngle)
  
sec=second();
secAngle=map(0,60,360)
push()
stroke("green")
rotate(secAngle)
line(0,0,150,0)
pop()
stroke("green")
arc(0,0,300,300,0,secAngle)

  drawSprites();
}