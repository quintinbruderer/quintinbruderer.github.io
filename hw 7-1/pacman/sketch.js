var pacmanArray = [];
//question: how do you use constructor functions outside an array? if possible

function setup() {
  createCanvas(1200, 700);
  for (var i = 0; i < 2; i++) { // odd question, why is there only 2. Doesn't zero count?
    pacmanArray[i] = new Pacman(random(0, width), random(0, height));
  }
  //dirTime = 4000; //dirTime = (random(0.5, 4) * 1000);
  //setInterval(timer, dirTime);
}

function draw() {
  background(0);

  //function timer() {
  // fill(255);
  //  text("working", 50, 50);
  //}

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