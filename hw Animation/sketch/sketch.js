var bulge = 0;


function setup() {
  createCanvas(1200,800);
  background(0);
  frameRate(15)
  
  
  }

function draw() {
 ellipseMode(CENTER);
 colorMode(HSB);
  fill(mouseX,256, 256);
  ellipse(600,400,bulge, 100);
  
  textSize(20);
  textFont("impact");
  var flashy =random(360);
  fill(flashy, 256, 256);
  text("I am honestly still somewhat confussed on how to make some of this work...", 20, 20);
  
  bulge = bulge+2;

}

/*ellipseMode(CENTER);
  background(0);
  colorMode(HSB);
  fill(mouseX, 256, 256);
  ellipse(400,400,40,40);*/