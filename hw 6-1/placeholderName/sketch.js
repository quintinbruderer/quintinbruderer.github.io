var ballarray = [];

function setup() {
  createCanvas(1000, 600);

  for (var i = 0; i < 5; i++) {
    ballarray[i] = {
      bx: random(0, width),
      by: 0,
      speed: 2,
      col: (150, 100, 100),
      //col: map(this.by, 0, height, 0, 360),
      display: function() {
        fill(this.col, 255, 255);
        ellipse(this.bx, this.by, 20, 20);
      },
      move: function() {
        this.by = this.by + this.speed;
        if (this.by >= height || this.by <= 0) {
          //if (this.by >= height) {
          this.speed = this.speed * -1
            // if(this.by<=(*.25)){
            //   this.speed=this.speed * -1
            //}
        }
      }
    }
  }
}

function draw() {
  background(0);
  colorMode(HSB);
  for (var i = 0; i < ballarray.length; i++) {
    ballarray[i].display();
    ballarray[i].move();
  }
}

function mousePressed() {
  // ballarray.push(
  //   ballarray[i] = {
  //     bx: random(0, width),
  //     by: 0,
  //     speed: 2,
  //     col: (150, 100, 100),
  //     //col: map(this.by, 0, height, 0, 360),
  //     display: function() {
  //       fill(this.col, 255, 255);
  //       ellipse(this.bx, this.by, 20, 20);
  //     },
  //     move: function() {
  //       this.by = this.by + this.speed;
  //       if (this.by >= height || this.by <= 0) {
  //         //if (this.by >= height) {
  //         this.speed = this.speed * -1
  //           // if(this.by<=(*.25)){
  //           //   this.speed=this.speed * -1
  //           //}
  //       }
  //     }
  //   }
  // )
}