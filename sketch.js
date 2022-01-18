var bg;bgImg;
var shooter1,shooter2;

function preload(){
bgImg=loadImage("./assets/bg.jpeg");
shooter1=loadImage("./assets/shooter_2.png")
shooter2=loadImage("./assets/shooter_3.png")
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
 bg.addImage(bgImg);
 
}
function draw(){
 background(0)
drawSprites()
}