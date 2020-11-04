var wall;
var thichness;
var bullet;
function setup() {
  createCanvas(800,400);
  
  wall = createSprite(700,200,50,200);
  
  bullet = createSprite(200,200,60,10);
  bullet.velocityX = 50 ;
}

function draw() {
  background(0,0,0);
  
  if (bullet.collide(wall)){
    wall.shapeColor = "red" ;
  }
  drawSprites() ;
}
