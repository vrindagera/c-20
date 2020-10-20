function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = 'green'; 
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor = 'green';
}

function draw() {
  background(0);
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY  
  if(movingrect.x-fixedrect.x === fixedrect.width/2+movingrect.width/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";  
  }
  drawSprites();
}