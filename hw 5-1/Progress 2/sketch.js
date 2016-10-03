  var on = false;

  function setup() {
    createCanvas(1200, 800);
  }

  function draw() {
    //pikachu.pikafunction(width / 2, height / 2);
    //filling the button
    fill(150, 0, 0);
    //changes background on button pressing
    if (on) {
      background(255, 255, 0);
      noStroke();
      textSize(40);
      text("Its Pikachu!", width / 2, height / 2 + 70);
      pikachu.pikafunction(width / 2, height / 2 - 130);
    } else {
      background(0);
    }
    
    //programming the button.
    buttonProg();
    stroke(255);
    strokeWeight(4);
    rectMode(CENTER);
    rect(width / 2, height / 2, 46, 46);


  }

  function mousePressed() {
    if (mouseX >= width / 2 - 23 && mouseX <= width / 2 + 23 && mouseY >= height / 2 - 23 && mouseY <= height / 2 + 23) {
      on = !on;
    }
  }

  //own created functions and object
  var pikachu = {
    values: 80,
    pikafunction: function(x, y) {
      //pika eyes
      ellipseMode(CENTER);
      fill(0);
      strokeWeight(1);
      ellipse(x - 175, y - 70, this.values, this.values);
      ellipse(x + 175, y - 70, this.values, this.values);
      //eye highlights
      ellipseMode(CENTER);
      fill(255);
      ellipse(x - 155, y - 90, 20, 20);
      ellipse(x + 155, y - 90, 20, 20);
      ellipse(x - 150, y - 50, 10, 10);
      ellipse(x + 150, y - 50, 10, 10);

      //pikacheekz
      fill(236, 50, 53);
      noStroke();
      ellipse(x - 160, y + 30, this.values, this.values);
      ellipse(x + 160, y + 30, this.values, this.values);
      stroke(0);

      //pikanose (x originally was 600 and y was 250)
      strokeWeight(1);
      fill(0);
      triangle(x - 25, y, x + 25, y, x, y + 25);

      //pikamouth
      noFill();
      strokeWeight(3);
      curve(x - 50, y - 230, x, y + 25, x - 100, y + 30, x - 110, y - 205);
      curve(x + 50, y - 230, x, y + 25, x + 100, y + 30, x + 110, y - 205);

      //ear triangles (cheeks end at 390 and 800)
      fill(0);
      triangle(x - 255, y - 240, x - 210, y - 230, x - 200, y - 155);
      triangle(x + 255, y - 240, x + 210, y - 230, x + 200, y - 155);

      //tail and shadow
      strokeWeight(2);
      line(x + 270, y + 210, x + 180, y + 150);
      line(x + 300, y + 130, x + 330, y + 20);
      line(x + 330, y + 20, x + 220, y + 30)
      strokeWeight(8);
      line(x + 170, y + 270, x + 270, y + 210);
      line(x + 180, y + 150, x + 300, y + 130);
    }
  }

  function buttonProg() {
    if (mouseX >= width / 2 - 23 && mouseX <= width / 2 + 23 && mouseY >= height / 2 - 23 && mouseY <= height / 2 + 23) {
      fill(255, 0, 0);
      textAlign(CENTER);
      noStroke();
      if (!on) {
        textSize(20);
        text("Who's that Pokemon?", width / 2, height / 2 + 50);
      }
    }
  }