function setup() {
  //screensize
  createCanvas(1200, 800);

}

function draw() {
  col = mouseX;
  colorMode(HSB);
  // if (col > 255 && col < 510) {
  //   col = map(mouseX, 256, 510, 255, 0);
  // } else if (col > 510 && col < 765) {
  //   col = map(mouseX, 510, 765, 0, 255)
  // }

  colorMode(HSB);
  background(col, 255, 255);
  text(mouseX, 20, 20);
}