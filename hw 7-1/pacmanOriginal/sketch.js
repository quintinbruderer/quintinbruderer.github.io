var pacmanArray = [];
//question: how do you use constructor functions outside an array? if possible

function setup() {
  createCanvas(1200, 700);
  for (var i = 0; i < 2; i++) { // odd question, why is there only 2. Doesn't zero count?
    pacmanArray[i] = new Pacman(random(0, width), random(0, height));
  }
}
//var timer = (random(.5, 4) * 1000);
//setInterval(text("working", 50, 50), timer);
function draw() {
  background(0);

  for (var i = 0; i < pacmanArray.length; i++) {
    pacmanArray[i].display();
    pacmanArray[i].move();
  }
}





/*function draw() {
  background(0);
  for (var i = 0; i < pacmanArray.length; i++) {
    pacmanArray[i].display();
    pacmanArray[i].move();
    
  }
}*/