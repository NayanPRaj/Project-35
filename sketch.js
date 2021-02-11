var balloon, background;
var balloonImage,backgroundImage;

function preload (){
backgroundImage=loadImage("images/1.png");
balloonImage=loadImage("images/2.png");
}

function setup(){
  database=firebase.database();
  console.log(database);
createCanvas(500,500);

balloon=createSprite(100,400,20,20);
balloon.addImage("balloon",balloonImage);
balloon.scale=0.4;


}

function draw(){
  background(backgroundImage);

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  if(keyDown(LEFT_ARROW)){
    balloon.y=balloon.y+10;
  }

  drawSprites();
}