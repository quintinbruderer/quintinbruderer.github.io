 var trip = {
    lit: (25,55),
    crazy: (50),
    flying: (50)
        /*
    why didn't this work?
    lit: random(25,55),
    crazy: random(width/3,width*1/3),
    flying: random(height/4, height/3)
    */
  };
  
function setup() {
createCanvas(1200,800);
}
function draw() {
  background(0);
  noFill();
  //button progamming
  if(mouseX<=width/2+40 && mouseX>= width/2-40 && mouseY<=height/2+40  && mouseY>=height/2-40){
    if(mouseIsPressed)
    {fill(255,255,0);
    background(180);
   //how to change font color?
    textAlign(CENTER);
    textSize(random(trip.lit));
    text("It's Lit Fam!", /*random(trip.crazy) , random(random(trip.flying));*/ random(width/3,2/3*width) , random(height/4,height/3));
    
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
  
  //here goes some variable math stuff
  
   rectMode(CENTER);
  
   
 //colors the background squares   
    
    /* for (var col = 0, col <= 255, col +20){
     
      colorMode(HSB);
      col = map(col,0,255,col,width);
      fill(col,255,255,60);
    }
      */
 
   for (var x = 0; x <= width; x += 25) {
     for (var y = 0; y <= height; y += 25) {
     rect(x,y,10,10);
        }
       }
   }