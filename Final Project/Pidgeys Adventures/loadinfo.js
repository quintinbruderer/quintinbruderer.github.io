var Load = function() {
  this.smack = loadSound('assets/Smack.mp3');
  this.through = loadSound('assets/Through.mp3');
  this.wing = loadSound('assets/wing.ogg');
  this.music


  this.daytime = true;
  this.nightA = true;

  if (this.daytime) {
    this.music = loadSound('assets/route38.mp3');
    this.daytime = false;
  } else {
    if (this.nightA) {
      this.music = loadSound('assets/goldenrod.mp3');
      this.daytime = true;
      this.nightA = false;
    } else {
      this.music = loudSound('assets/gamecorner.mp3');
      this.daytime = true;
      this.nightA = true;
    }
  }
  return this.music;
}