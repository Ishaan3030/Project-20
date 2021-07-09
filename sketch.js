var bg, sleep, brush, gym, eat, drink, move, bath;
function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
 brush = loadAnimation("images/brush.png");
  gym = loadAnimation ("images/gym11.png, images/gym12.png");
  eat = loadAnimation ("images/eat1.png,images/eat2.png");
  drink = loadAnimation ("images/drink1.png,images/drink2.png");
  move = loadAnimation ("images/move.png,images/move1.png");
  bath = loadAnimation ("images/bath1.png,images/bath2.png");
}

function setup() {
  createCanvas(800,700);
 b = createSprite(400,350,800,700);
 b.addAnimation("background",bg);
 b.scale = 0.9;
 
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background("lightblue");
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}
