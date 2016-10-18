/*Quinn's to do list LOL
Fix breaking mouth arc
scale/rotate pacmans upon direction angle
set canvas boundaries 
stop runspeed if pacman distance is too close to one another. 

*/
function Pacman(x, y) {
  //parameters
  this.x = x;
  this.y = y;
  //pacmans' size
  this.size = 100;
  //pacmans' different colors
  this.r = random(230, 255);
  this.g = random(200, 255);
  //pacman's arc angles
  this.eyedeg = 25;
  this.eDegR = radians(this.eyedeg); //eye angle, as put in setup so it doesn't shift with mDeg
  this.mouthdeg = 0;
  this.speed = 2;
  this.munchspeed = this.speed; //. 2 is temporary filler number until timerloop changes it
  this.runspeed = this.speed;
  // time and direction
  this.begin = 0;
  this.targetTime = 0;

  this.direction = ["up", "down", "left", "right"];
  this.ranDirection = 0;



  this.display = function() {
    //creates munching pacman
    this.draw();
    this.mouthMunch();
    fill(255);
    //text(this.direction[0], 50, 50);  testing if direction array works
  };

  this.draw = function() {
    push();
    noStroke();
    fill(this.r, this.g, 0);
    arc(this.x, this.y, this.size, this.size, this.mDegR, TWO_PI - this.mDegR, PIE);
    fill(0);
    translate(0, -this.size / 4);
    arc(this.x, this.y, this.size / 8, this.size / 8, PI + this.eDegR, PI - this.eDegR, PIE);
    pop();
  };

  this.mouthMunch = function() {
    this.mDegR = radians(this.mouthdeg); //converts mouth degree into radians for munching arc
    this.mouthdeg = this.mouthdeg + this.munchspeed; //animates mouth
    if (this.mouthdeg > 40 || this.mouthdeg <= 2) {
      if (this.mouthdeg < 2) { this.mouthdeg = 2} //boundary condition...aka it will never get past 1 or 41
      if(this.mouthdeg > 40) {this.mouthdeg = 40}
      this.munchspeed = this.munchspeed * -1;
    }
  };

  this.move = function() {
    if (this.direction[this.ranDirection] == "up") {
      this.x = this.x;
      this.y = this.y - this.runspeed;
    } else if (this.direction[this.ranDirection] == "down") {
      this.x = this.x;
      this.y = this.y + this.runspeed;
    } else if (this.direction[this.ranDirection] == "left") {
      this.x = this.x + this.runspeed;
      this.y = this.y;
    } else if (this.direction[this.ranDirection] == "right") {
      this.x = this.x - this.runspeed;
      this.y = this.y;
    }
    this.timer();
  };


  //using Michael Musick's Pacman Timer because my dumbass can't figure out setInterval
  this.timer = function() {
    this.targetTime = random(1, 4)
    var startTime = this.begin / frameRate();
    if (startTime >= this.targetTime) {
      var tempdir;
      this.begin = 0;
      //Do starts once, and will only repeat if previous (randirection) does not equal new (tempdir), or code "do"'s again.
      do {
        tempdir = floor(random(0, 3));
      } while (tempdir == this.ranDirection); // this is the test of new direction and old/current direction. 
      //this sets new direction choice to current/old choice. 
      this.ranDirection = tempdir;

      this.speed = floor(random(2, 10));
      this.munchspeed = this.speed;
      this.runspeed = this.speed;
    } else {
      this.begin++;
    }
    fill(255);
    text(this.ranDirection, 50, 50);

  };


}

/* Quinn's testing timer
this.timer = function() {
    var startTime = this.begin / frameRate();
    if (startTime >= this.targetTime) {
      //var test = (random (1,5));
      fill(255);
      ellipse(100, 100, 50, 50);
      this.begin = 0;

    } else {
      this.begin++;
      fill(255);
      text(frameRate(), 100, 100);
      text(this.begin, 100, 150);
    }
  };
*/
































/* Michael Musick's original Timer
 this.timer = function() {
    this.startTime = this.startTime / frameRate();
    if (this.startTime >= this.targetTime) {
      fill(255);
      ellipse(50, 50, 50, 50);

      //this.changeDirection();
    } else {
      this.startTime++;
    }
  };
  */