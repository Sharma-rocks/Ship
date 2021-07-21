var ship, ship_running, edges;
var groundImage;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png");
  groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  groundImage=createSprite(20,150,10,50)
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  ship.scale = 0.5;
  ship.x = 50
}

function draw() {
  background("lightblue");
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.5;
  
  //stop trex from falling down
  ship.collide(edges[3])
  drawSprites();
}