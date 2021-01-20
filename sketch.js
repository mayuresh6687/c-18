
var fixed,move;
function setup() {

  createCanvas(800,400);
  move=createSprite(400, 200, 80, 30);
  move.shapeColor="green";
  move.debug=true;
  fixed=createSprite(200,200,50,80);
fixed.shapeColor="green";
fixed.debug=true;
}

function draw() {
  background(255,255,255); 
  move.x=World.mouseX;
  move.y=World.mouseY;
  if(move.x-fixed.x<fixed.width/2 + move.width/2
    && fixed.x-move.x<fixed.width/2 + move.width/2
    && move.y-fixed.y<fixed.height/2+move.height/2
    && fixed.y-move.y<fixed.height/2+move.height/2){
    move.shapeColor="red";
    fixed.shapeColor="red";
  }
else 
{
  move.shapeColor="green";
  fixed.shapeColor="green";
}
 
  drawSprites();
}