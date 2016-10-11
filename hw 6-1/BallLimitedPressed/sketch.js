var ballarray = [];

function setup() {
  createCanvas(1000, 600);

  for (var i = 0; i < 2; i++) {
    ballarray[i] = new ColorbBall(170, random(0, width), random(0, height));
  }
}

function draw() {
  background(0);
  colorMode(HSB);
  for (var i = 0; i < ballarray.length; i++) {
    ballarray[i].display();
    ballarray[i].move();

  }
  if (mouseIsPressed) {
    ballarray.push(new ColorbBall(random(1, 360), mouseX, mouseY));
    if (ballarray.length > 60) {
      ballarray.splice(0, 1);
    }
  }

}

// function mousePressed() {
//   ballarray.push(new ColorbBall(random(1, 360), mouseX, mouseY));
//   if (ballarray.length > 6) {
//     ballarray.splice(0, 1);
//   }
// }