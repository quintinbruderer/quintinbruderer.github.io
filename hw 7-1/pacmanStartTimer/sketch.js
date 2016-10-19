var pacmanArray = [];
//question: how do you use constructor functions outside an array? if possible

function setup() {
  createCanvas(1200, 700);
  frameRate(30); //NTSC YO!
  for (var i = 0; i < 5; i++) { // odd question, why is there only 2. Doesn't zero count?
    pacmanArray[i] = new Pacman( (i + 1) * (width / 5), (i + 1) * (height / 5 ));
    // 0 + 1 = 1. 1 * 240 = 240
    // 1 + 1 = 2. 2 * 240 = 480 etc etc etc
  }
}

function draw() {
  background(0);

  for (var i = 0; i < pacmanArray.length; i++) {
    pacmanArray[i].display();
    pacmanArray[i].pacDistChecks(pacmanArray, i);
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