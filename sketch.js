var bullet,wall,thckness;
var speed,weight;

function setup() {                                                                                              
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
wall = createSprite(1200,200,random(22,83),height/2);
bullet.velocityX=speed;
bullet.shapeColor = "white";
wall.shapeColor = "black";
bullet.debug = true;
wall.thickness = random (22,83);
bullet.speed = random(223,321);
bullet.weight = random(30,52);
bullet.velocityX = 20;
bullet.collide  = wall;
console.log(bullet.speed);
}

function draw() {
  background(0,0,255);  
  var damage = 0.5* bullet.weight*bullet.speed*bullet.speed/(wall.thickness*wall.thickness*wall.thickness);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
  }
  



function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
  return false;
}
}
