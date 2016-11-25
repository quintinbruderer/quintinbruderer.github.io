var music;
var smack;
var through;
var wing;
var daytime;
var nightA;


function preload() {
  daytime = round(random(1));
  nightA = round(random(1));
  smack = loadSound('assets/Smack.mp3');
  through = loadSound('assets/Through.mp3');
  wing = loadSound('assets/wing.ogg');

  if (daytime == 1) {
    music = loadSound('assets/route38.mp3');
    //daytime = false;
  } else if (nightA == 0) {
    music = loadSound('assets/goldenrod.mp3')

  } else {
    music = loadSound('assets/gamecorner.mp3');
    // daytime = true;
    //nightA = false;
  }
}

function setup() {
  createCanvas(800, 400);
  createSprite(200, 200, 50, 50);

  music.setVolume(0.05);
  music.play();
}

function draw() {
  background(0);
  drawSprites();
  fill(255);
  text(daytime, 10, 10);
  text(nightA, 10, 20);
}

function mousePressed() {
  wing.setVolume(0.1);
  wing.play();
}