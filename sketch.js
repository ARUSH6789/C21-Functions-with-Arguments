var fixedRect, movingRect;

function setup(){
  fixedRect = createSprite(350,200,50,300);
  movingRect = createSprite(200,200,100,30);

  ball1 = createSprite(100,100,20,20);
  ball1.shapeColor = "yellow";
  ball1.velocityX = 3;

  ball2 = createSprite(100,200,20,20);
  ball2.shapeColor = "blue"
  ball2.velocityX = 3;

  //movingRect.debug = true;
  //fixedRect.debug = true;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //detecting touch - calling function with arguments
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  

  //car colliding with the wall
collide(fixedRect,ball1);


  //bounceOFf
  bounceOff(fixedRect,ball2);
  drawSprites()
}

