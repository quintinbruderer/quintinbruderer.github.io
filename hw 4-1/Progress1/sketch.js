  var trip = {
    lit: (25,55),
    crazy: (50),
    flying: (50)
    
    /*
    why didn't this work?
    lit: random(25,55),
    crazy: random(width/3,width*2/3),
    flying: random(height/4, height/3)
    */
    
  };
  
  function setup() {
 //screensize
 createCanvas(1200,800);

}

function draw() {
  background(0);
  //hollow shell button
  noFill();
  
  //button progamming
  if(mouseX<=width/2+40 && mouseX>= width/2-40 && mouseY<=height/2+40  && mouseY>=height/2-40){
    if(mouseIsPressed)
    {fill(255,255,0);
    background(180);
   //how to change font color?
    textAlign(CENTER);
    textSize(random(trip.lit));
    text("It's Lit Fam!", random(width/3,width*2/3) , random(width/8,width/4));
    
    }
  else(fill(0,150,255))
    textAlign(CENTER)
    text("click here", width/2, height/2+100);  
    }
    
   //button 
  rectMode(CENTER);
  stroke(255);
  strokeWeight(1);
  rect(width/2,height/2,80,80);
  }
  