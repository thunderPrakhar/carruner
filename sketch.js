var roadImg, road;
var fuelImg, fuel, fuelsGroup;
var car, carImg;
var invisibleBlockGroup, invisibleBlock;
var invisibleBlock1Group, invisible1Block;

var gameState = "play"
var f1 = 100;
var obsImg, obs, obsGroup;
f2 = 6;

function preload(){
  roadImg = loadImage("download (7).jpg");
  fuelImg = loadImage("kisspng-computer-icons-encapsulated-postscript-fuel-tank-5b3e25bf2cede3.729381641530799551184.png");
  carImg = loadImage("clipart-car-eye-3.png");
  spookySound = loadSound("spooky.wav");
  obsImg = loadImage("Daco_5035768.png")
}

function setup(){
  createCanvas(600,600);
 // spookySound.loop();
  road = createSprite(300,300);
  road.addImage("road",roadImg);
  road.scale = 3
  road.velocityY = f2;
  
  fuelsGroup = new Group();
  obsGroup = new Group();

  invisibleBlockGroup = new Group();
  invisibleBlock1Group = new Group();

  
  car = createSprite(200,485,50,50);
  car.scale = 0.08;
  car.addImage("car", carImg);
}

function draw(){
  background(87, 87, 92);
  f1=  f1-0.4
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      car.x = car.x - 5;
    }
    
    if(keyDown("right_arrow")){
      car.x = car.x + 5;
    }
    
    if(keyDown("space")){
     road.velocityY = 20;
      f2 = 20;
    f2 = 20;
  
     
    }
    else{
      road.velocityY = 6;
      f2 = 6;
     f2 = 6;

    }
    
    
    
    if(road.y > 400){
      road.y = 300
    }
    spawnFuels();
    spawnObs();

    

    if(invisibleBlockGroup.isTouching(car) || car.y > 600){
      fuelsGroup.destroyEach();
      f1  = 100;
    }
    
    if(invisibleBlock1Group.isTouching(car) || car.y > 600){
    gameState ="end";
 
    }
    if(f1<1){
      gameState = "end"
    }
    
    drawSprites();
    stroke("yellow");
    fill("yellow");
    textSize(20);
    text("FUEL = "+Math.round(f1),20,20)
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(40);
    text("Game Over",210,250)
    text("PRESS R TO RESTART",100,400);

    if(keyDown("r")){
      gameState = "play"
      f1 = 100;
    }
  }

}

function spawnFuels() {
  //write code here to spawn the doors in the tower
  if (frameCount % 130 === 0) {
    var fuel = createSprite(200, -50);
    var invisibleBlock = createSprite(200,1);
    invisibleBlock.width = 50;
    invisibleBlock.height = 2;
    
    fuel.x = Math.round(random(120,400));
    invisibleBlock.x = fuel.x;
    
    fuel.addImage(fuelImg);
    fuel.scale = 0.1
    
    fuel.velocityY = f2;
    invisibleBlock.velocityY = f2;
    
    car.depth = fuel.depth;
    car.depth +=1;
   
    //assign lifetime to the variable
    fuel.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each door to the group
    fuelsGroup.add(fuel);
    invisibleBlock.debug = false;
    invisibleBlock.visible = false;
    invisibleBlockGroup.add(invisibleBlock);
  }
}
function spawnObs() {
  //write code here to spawn the doors in the tower
  if (frameCount % 100 === 0) {
    var obs = createSprite(200, -50);
    var invisible1Block = createSprite(200,1);
    invisible1Block.width = 50;
    invisible1Block.height = 2;
    
    obs.x = Math.round(random(120,400));
    invisible1Block.x = obs.x;
    
    obs.addImage(obsImg);
    obs.scale = 0.09
    
    obs.velocityY = 6;
    invisible1Block.velocityY = f2;
    
    car.depth = obs.depth;
    car.depth +=1;
   
    //assign lifetime to the variable
    obs.lifetime = 800;
    invisible1Block.lifetime = 800;

    
    //add each door to the group
    obsGroup.add(obs);
    invisible1Block.debug = false;
    invisible1Block.visible = false;
    invisibleBlock1Group.add(invisible1Block);
  }
}


