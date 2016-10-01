var trip = {
	// Were you trying to make an array ("a collection of data objects")?
	lit: [25,55], //i noticed square brackets rather than round?
	crazy: 50,
	flying: 50
	/*
	why didn't this work?
	// If you are going to call functions, then they need to be called from another function. This variable object could have been assigned in setup(). (It would still be instantiated here though).
	lit: random(25,55), //so if I am unable to put variables in objects, is the point of them to only hold "data" (forgot the term)
	crazy: random(width/3,width*1/3),
	flying: random(height/4, height/3)
	*/
};
//I edited this and added stroke difference on the squarees so the center one was more noticable. 

//Something crazy would be if the button was pressed, the background turned white, and the colors started to flicker. 

function setup() {
	createCanvas(1200,800);

	// set the "trip" values here. some of the examples and vids have variables in specific spots?
	//  what were these going to be used for? for placement of the "its lit"
	trip.crazy = random(width/3,width*1/3);
	trip.flying = random(height/4, height/3);
}
function draw() {
	background(0);
	noFill(); //not much point to my no fill here, right?

	//here goes some variable math stuff
	rectMode(CENTER);

	// draw and color background squares. I noticed near the y 0 the color is red heavy. 
	//colors the background squares.   I still dont understand, like why use y and x in the color map?
	colorMode(HSB);
	for (var x = 0; x <= width; x += 25) { //so this will continue until x is no longer smaller, correct?
		for (var y = 0; y <= height; y += 25) {
			// color fill
			col = map(y,0,x,0,360) % 360; //whats the percent mean? 
			fill(col,255,255, 50); 
			strokeWeight(1);
			rect(x,y,10,10);
		} //you did this first so when the button is clicked the background covers it? aka order of ops?
	}


	//button progamming
	if(mouseX<=width/2+40 && mouseX>= width/2-40 && mouseY<=height/2+40  && mouseY>=height/2-40){
		if(mouseIsPressed) {
			fill(255,255,0);
			background(180);
			//how to change font color?
			textAlign(CENTER);
			textSize(random(trip.lit[0], trip.lit[1])); //I notice the numbers?
			text("It's Lit Fam!", /*random(trip.crazy) , random(random(trip.flying));*/ random(width/3,2/3*width) , random(height/4,height/3));
		
	/*	if (keyIsDown(SHIFT))
		  for (var x2 = 0; x <= width; x2 += 25) { 
		for (var y2 = 0; y <= height; y2 += 25) {
			// color fill
			col = map(y,0,x,0,360) % 360;  
			fill(col,255,255, 50); 
			strokeWeight(1);
			rect(x2,y2,10,10);
		} 
	}*/
		  
		}
	} else { //I also noticed my else is within the if, it should be out of the brackets?
		(fill(0,150,255))
		textAlign(CENTER); 
		text("click here", width/2, height/2+100); //you put the "click here" text here in the else so itd dissapear (be covered by the backgorund) if the if statement came true?
	}
	//button
	rectMode(CENTER);
	stroke(255);
	strokeWeight(4);
	rect(width/2,height/2,80,80);
}
