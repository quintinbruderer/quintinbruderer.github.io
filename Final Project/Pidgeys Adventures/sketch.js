var music;
var smack;
var through;
var wing;
var daytime;
var nightA;
var title;

//var pidgeyStill, pidgeyFlap, pidgeyImg;
var pidgeyAnim, pidgeyFlap;

var sky;
var trees;
var buildings;
var ground;
var pipebird;
var tower;

var groundX = 0;
var treeX = 0;
var buildX = 0;



function preload() { //this is to load all of the asset information
  daytime = round(random(1));
  nightA = round(random(2));

  // assets that will always be used
  pipebird = loadImage('assets/pipeB.png');
  smack = loadSound('assets/Smack.mp3');
  through = loadSound('assets/Through.mp3');
  wing = loadSound('assets/wing.ogg');

  pidgeyAnim = loadAnimation('assets/pidgeysheet1.png', 'assets/pidgeysheet2.png', 'assets/pidgeysheet3.png');
  //pidgeyImg = loadSpriteSheet('assets/pidgeysheet.png', 48, 45, 3);
  //pidgeyFlap = loadAnimation(pidgeyImg);



  //I'm going to need a "info" array to put my title image, tap image and game over image within.
  title = loadImage('assets/title.png');

  //depending on what daytime info is given, will dictate what specific assets load
  if (daytime == 1) {
    music = loadSound('assets/route38.mp3');
    sky = loadImage('assets/backgroundD.png');
    buildings = loadImage('assets/buildingsD.png');
    trees = loadImage('assets/treesD.png');
    ground = loadImage('assets/groundD.png');
    tower = loadImage('assets/pipeD.png');


    //daytime = false;
  } else {
    sky = loadImage('assets/backgroundN.png');
    buildings = loadImage('assets/buildingsN.png');
    trees = loadImage('assets/treesN.png');
    ground = loadImage('assets/groundN.png');
    tower = loadImage('assets/pipeN.png');

    if (nightA < 2) {
      music = loadSound('assets/goldenrod.mp3')

    } else {
      music = loadSound('assets/gamecorner.mp3');
      // daytime = true;
      //nightA = false;
    }
  }
}

function setup() {
  createCanvas(432, 768);

  createSprite(width / 2, 200, 20, 30);

  music.setVolume(0.05);
  music.play();

  pidgeyFlap = createSprite(20, height / 2);
  pidgeyFlap.addAnimation("default", pidgeyAnim);
  
}

function draw() {
  //pidgeyFlap.frameDelay = 6;
  background(sky);
  imageMode(CORNER);

  //this is to place the shit in the canvas
  //placeItems(sky, buildings, trees, ground, tower); //would an array work in here?
  //using my original layout image, I got coordinances to where each piece is to be placed
  //originally these were in setup, but nothing was being drawn, so although groundX was being incrimented, the
  //...image was stuck.
  image(buildings, buildX, 272);
  image(trees, treeX, 423);
  image(ground, groundX, 603);





  fill(255);
  text(daytime, 10, 10);
  text(nightA, 10, 20);

  groundX = groundX - 2;
  //the math of 96 is the width of Ground: 528 subtract the width of the background/canvas: 432 = 96
  //I made the sprites so they would tile, thus although jumping back LOOKS like a long movement
  if (groundX <= -96) {
    groundX = 0
  }
  //the tree math was similar, but after runing into issue of it cutting half a tree off, I had to figure what
  //..half a tree is pixels and "add" that to the negative number.
  if (frameCount % 10 === 0) {
    treeX = treeX - 2;
    if (treeX <= -192) {
      treeX = 0;
    }
  }
  if (frameCount % 60 === 0) {
    buildX = buildX - 2;
    if (buildX <= -144) {
      buildX = 0;
    }
  }

  imageMode(CENTER);
  image(title, width / 2, height / 4);

  //animation (pidgeyFlap, 20, height/2);
   drawSprites();


}

function mousePressed() {
  wing.setVolume(0.1);
  wing.play();
}