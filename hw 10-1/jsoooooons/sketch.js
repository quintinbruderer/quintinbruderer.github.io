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
  noCanvas();
  //createCanvas(windowWidth, 100);
  //poster Image size is 185
  poster = (posterInfo.images.base_url + posterInfo.images.poster_sizes[3] + testFilm.poster_path)
  var info = ["genre", "budget", "ratings", "desc"];

  var posterIMG = createImg(poster);
 // posterIMG.position(((windowWidth / 2) - 185), 20);

  var title = createElement('h2',"Film Name:" + testFilm.original_title);
  
  var filmInfo = createP("Information")
  info[0] = createP("Genre: " + testFilm.genres[0 /* or 2? */ ].name); //genre
  info[1] = createP("Budget: " + testFilm.budget);
  info[2] = createP("Ratings: " + testFilm.vote_average);
  info[3] = createP("Film Description: " + testFilm.overview);


  for (var i = 0; i < info.length; i++) {
    filmInfo.child(info[i]);

    console.log(poster);
  }

  /*
  genre.parent(title);
  //will have ratings, and other stuff all in the fat parent of title 
  desc.parent(title);
  */

}

function draw() {}