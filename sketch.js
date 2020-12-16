var a,b;
function setup() {
  createCanvas(1200,800);
  a=createSprite(200, 200, 50, 80);
  b=createSprite(400,200,80,30);
}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
  a.shapeColor="green";
  b.shapeColor="green";
  console.log(b.x-a.x);
  if(b.x-a.x<b.width/2+a.width/2 && a.x-b.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else
  {
    a.shapeColor="green";
  b.shapeColor="green";
  }
  drawSprites();
}