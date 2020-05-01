var speed;
var weight; 
var car,wall;

function setup() {
  createCanvas(1600,400);

  speed = random(35,95);
 weight = random(400,1500);
car=createSprite(200,200,30,30)
   car.velocityX=speed
  wall=createSprite(1590, 20, 20, 680);
  wall.shapeColor=(80,80,80);
}  

function draw() {
  background("black")
  if(wall.x-car.x<(wall.width/2+car.width/2)){
    car.velocityX=0
    var def=0.5*speed*speed*weight/22500
    if(def<100){
      car.shapeColor=color(0,255,0)
    }
    if(def>100&&def<180){
      car.shapeColor=color(230,230,0)
    }
    if(def>180){
      car.shapeColor=color( 255,0,0)
    }
  }

  
  drawSprites();
  
    
}



