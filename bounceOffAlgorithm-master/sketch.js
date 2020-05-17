var object2, object1;

function setup() {
  createCanvas(1200,800);
  Rect1 = createSprite(400, 500, 50, 80);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
  
  

  Rect2 = createSprite(400, 50, 50, 80)
  Rect2.shapeColor="green"

  Rect2.velocityY = +5;
  Rect1.velocityY = -5;


}

function draw() {
  background(0,0,0);  

  if (bounce(Rect1, Rect2)){
Rect1.shapeColor="blue"
Rect2.shapeColor="white"
  }
  else{
Rect1.shapeColor="red"
Rect2.shapeColor="yellow"


  }
  

  drawSprites();
}

