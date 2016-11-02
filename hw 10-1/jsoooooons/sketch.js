var dataURL = "https://api.themoviedb.org/3/configuration?api_key=dc07d4ad7fe8a97173bde3373b03396d";
var url = "https://api.themoviedb.org/3/movie/80274?api_key=dc07d4ad7fe8a97173bde3373b03396d";

var testFilm;
var posterInfo;
var poster;

function preload() {
  testFilm = loadJSON(url);
  posterInfo = loadJSON(dataURL);
}

function setup() {
  createCanvas(windowWidth, 100);
  background(0);
  poster = (posterInfo.images.base_url + posterInfo.images.poster_sizes[3] + testFilm.poster_path)
  
  var info = ["genre", "budget", "ratings", "desc"];

  createImg(poster);
  var title = createP("Film Name:" + testFilm.original_title);

  info[0] = createP("Genre: " + testFilm.genres[0 /* or 2? */ ].name); //genre
  info[1] = createP("Budget: " + testFilm.budget);
  info[2] = createP("Ratings: " + testFilm.vote_average);
  info[3] = createP("Film Description: " + testFilm.overview);


  for (var i = 0; i < info.length; i++) {
    title.child(info[i]);

    console.log(posterInfo);
  }

  /*
  genre.parent(title);
  //will have ratings, and other stuff all in the fat parent of title 
  desc.parent(title);
  */

}

function draw() {
  textSize(15);
  fill(255);
  text("adding canvas cause I wanna mess with html...? I'll remove it later", 10, 10);

}