var movingrect, rectt;
function setup() {
  createCanvas(800,800);

  movingrect = createSprite(750, 750, 50, 50);
  movingrect.shapeColor = "red";
  movingrect.velocityX = -1;
  movingrect.velocityY = -1;
  rectt = createSprite (50,50,70,70);
  rectt.shapeColor = "yellow";
  rectt.velocityX = 1;
  rectt.velocityY = 1;
}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
  if(movingrect.x-rectt.x < movingrect.width/2 + rectt.width/2
    && rectt.x-movingrect.x<movingrect.width/2 + rectt.width/2
    && movingrect.y-rectt.y < movingrect.height/2 + rectt.height/2
    && rectt.y-movingrect.y< movingrect.height/2 + rectt.height/2) {
      movingrect.shapeColor = "green";
      rectt.shapeColor = "green";
    }
    else {
      movingrect.shapeColor = "red";
      rectt.shapeColor = "yellow";
    }
    if(movingrect.x-rectt.x < movingrect.width/2 + rectt.width/2
      && rectt.x-movingrect.x<movingrect.width/2 + rectt.width/2) {
        movingrect.velocityX *= -1;
        rectt.velocityX *= -1;
      }
      if(movingrect.y-rectt.y < movingrect.height/2 + rectt.height/2
        && rectt.y-movingrect.y<movingrect.height/2 + rectt.height/2) {
          movingrect.velocityY *= -1;
          rectt.velocityY *= -1;
        }
  drawSprites();
}