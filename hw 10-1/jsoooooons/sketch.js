var dataURL = "https://api.themoviedb.org/3/configuration?api_key=dc07d4ad7fe8a97173bde3373b03396d";
var urlPart1 = "https://api.themoviedb.org/3/movie/"
var urlPart2 = "?api_key=dc07d4ad7fe8a97173bde3373b03396d"
var testFilm;
var posterInfo;
var poster;
var button;
var newMovie;
var randoNumber

function preload() {

  randoNumber = round(random(8000, 259316));
  testFilm = loadJSON(urlPart1 + str(randoNumber) + urlPart2);
  posterInfo = loadJSON(dataURL);
  console.log(randoNumber);
}

function setup() {
  noCanvas();
  //createCanvas(windowWidth, 100);
  //poster Image size is 185
  poster = (posterInfo.images.base_url + posterInfo.images.poster_sizes[3] + testFilm.poster_path)
  var info = ["genre", "budget", "ratings", "desc"];
  var button = createButton("Random Movie");

  var posterIMG = createImg(poster);
  // posterIMG.position(((windowWidth / 2) - 185), 20);

  var title = createElement('h2', "Film Name:" + testFilm.original_title);

  var filmInfo = createP("Information")
  info[0] = createP("Genre: " + testFilm.genres[0 /* or 2? */ ].name); //genre
  info[1] = createP("Budget: " + testFilm.budget);
  info[2] = createP("Ratings: " + testFilm.vote_average);
  info[3] = createP("Film Description: " + testFilm.overview);
  /*
  genre.parent(title);
  //will have ratings, and other stuff all in the fat parent of title 
  desc.parent(title);
  */
  for (var i = 0; i < info.length; i++) {
    filmInfo.child(info[i]);



    console.log(poster);
  }
  button.mousePressed(rando);


}

function rando() {
  function preload() {
    randoNumber = round(random(8000, 259316))
    testFilm = loadJSON(urlPart1 + str(randoNumber) + urlPart2);
    poster = (posterInfo.images.base_url + posterInfo.images.poster_sizes[3] + testFilm.poster_path)
    var info = ["genre", "budget", "ratings", "desc"];
  }
  var posterIMG = createImg(poster);
  // posterIMG.position(((windowWidth / 2) - 185), 20);

  var title = createElement('h2', "Film Name:" + testFilm.original_title);

  var filmInfo = createP("Information")
  info[0] = createP("Genre: " + testFilm.genres[0 /* or 2? */ ].name); //genre
  info[1] = createP("Budget: " + testFilm.budget);
  info[2] = createP("Ratings: " + testFilm.vote_average);
  info[3] = createP("Film Description: " + testFilm.overview);


  for (var i = 0; i < info.length; i++) {
    filmInfo.child(info[i]);

    ;
  }
}

function draw() {}