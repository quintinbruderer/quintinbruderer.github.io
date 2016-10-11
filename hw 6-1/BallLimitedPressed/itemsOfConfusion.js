function ColorbBall(hueC, initX, initY) {
  this.bx = initX;
  this.by = initY;
  this.yspeed = random(3);
  this.xspeed = random(5);
  this.col = (hueC);

  this.display = function() {

    colorMode(HSB);
    fill(this.col, 100, 100);
    ellipse(this.bx, this.by, 20, 20);
    colorMode(RGB);
    fill(0);
    ellipse(this.bx, this.by, 4, 4);
  }


  this.move = function() {
    this.by = this.by + this.yspeed;
    if (this.by >= height || this.by <= 0) {
      //if (this.by >= height) {
      this.yspeed = this.yspeed * -1
        // if(this.by<=(*.25)){
        //   this.speed=this.speed * -1
        //}
    }
    this.bx = this.bx + this.xspeed;
    if (this.bx >= width || this.bx <= 0) {
      this.xspeed = this.xspeed * -1
    }
  }
}