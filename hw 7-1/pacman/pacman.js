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
  this.munchspeed = 2; //connect this to run speed later. 2 is temporary filler number
  this.runspeed = 2;

  this.display = function() {
    //creates munching pacman
    this.draw();
    this.mouthMunch();
  };

  this.draw = function() {
    noStroke();
    fill(this.r, this.g, 0);
    arc(this.x, this.y, this.size, this.size, this.mDegR, TWO_PI - this.mDegR, PIE);
    fill(0);
    translate(0, -this.size / 4);
    arc(this.x, this.y, this.size / 8, this.size / 8, PI + this.eDegR, PI - this.eDegR, PIE);
    translate(0, 0);
  };

  this.mouthMunch = function() {
    this.mDegR = radians(this.mouthdeg); //converts mouth degree into radians for munching arc
    this.mouthdeg = this.mouthdeg + this.munchspeed; //animates mouth
    if (this.mouthdeg > 40 || this.mouthdeg <= 0) {
      this.munchspeed = this.munchspeed * -1;
    }
  };

  this.move = function() {
    this.x = this.x + this.runspeed;
  };
}