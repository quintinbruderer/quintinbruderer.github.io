function setup() {
  createCanvas(1200, 750);
  background(255,281,18);
}
var values = (80, 80);
function draw() {
  //pika eyes
  ellipseMode(CENTER);
  fill(0);
  strokeWeight(1);
  ellipse(475, 180, values);
  ellipse(725, 180, values);
  //eye highlights
  ellipseMode(CENTER);
  fill(256);
  ellipse(495, 160, 20, 20);
  ellipse(705, 160, 20, 20);
  ellipse(450,200, 10, 10);
  ellipse(750,200, 10, 10);
  
  //pikacheekz
  fill(236, 50, 53);
  // why is this not working? 
  noStroke;
  ellipse(430, 290, values);
  ellipse(760, 290, values);
  
  //pikanose (center is 600)
  strokeWeight(1);
  fill(0);
  triangle(575, 250, 625, 250, 600, 275);
  
  //pikamouth
  noFill();
  strokeWeight(3);
  curve(550, 20, 600, 275, 500, 280, 450, 45);
  curve(650, 20, 600, 275, 700, 280, 690, 45);
  
  //ear triangles (cheeks end at 390 and 800)
  fill(0);
  triangle(345, 10, 380, 20, 390, 95);
  triangle(855, 10, 810, 20, 800, 95);
  
  //tail shadow
  line(770, 520, 870, 460);
  line(870, 460, 780, 400);
  line(780, 400, 900, 380);
  line(900, 380, 930, 270);
  line(930, 270, 820, 290)
}