function setup() {
  createCanvas(1000,2000);
  background(color(0,180, 200));
}
//hi friends

function draw() {
    strokeWeight (1);
    ellipse(mouseX-70, mouseY, 55, 55);
    ellipse(mouseX+70, mouseY, 55, 55);
    triangle(mouseX,mouseY+25,mouseX-20,mouseY+45,mouseX+20,mouseY+45)
    strokeWeight (4);
    line(mouseX-80, mouseY+70, mouseX+80, mouseY+70);
   curve(mouseX-80,mouseY+70,mouseX-40,mouseY+120,mouseX+40,mouseY+120,mouseX+80,mouseY+70)
  }