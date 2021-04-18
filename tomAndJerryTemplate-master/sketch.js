var bgImg;
var cat;

function preload() {
    //load the images here

    bgImg = loadAnimation("add image url here")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catImg2 = loadAnimation("add cat2 and cat3 image url here.png")
    mouseimg2 = loadAnimation("add mouse2 and mouse3 image url here")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.addAnimation("mouseTeasing");
    mouse.frameDelay = 25;

  }

 if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.addAnimation("mouseTeasing");
    mouse.frameDelay = 25;
 }


}