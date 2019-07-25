//https://api.themoviedb.org/3/movie/429617?api_key=3bcb757b3ebe4adeeb1c3a7d2a3c4dcc


// adult: false
// backdrop_path: "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg"
// belongs_to_collection: {id: 531241, name: "Spider-Man (Avengers) Collection", poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg", backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg"}
// budget: 160000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.marvel.com/movies/spider-man-far-from-home"
// id: 429617
// imdb_id: "tt6320628"
// original_language: "en"
// original_title: "Spider-Man: Far from Home"
// overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent."
// popularity: 270.047
// poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg"
// production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2019-06-28"
// revenue: 868542591
// runtime: 129
// spoken_languages: (4) [{…}, {…}, {…}, {…}]
// status: "Released"
// tagline: ""
// title: "Spider-Man: Far from Home"
// video: false
// vote_average: 7.8
// vote_count: 2363
//https://api.themoviedb.org/3/discover/movie?api_key=3bcb757b3ebe4adeeb1c3a7d2a3c4dcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1


// var apiKey = "3bcb757b3ebe4adeeb1c3a7d2a3c4dcc";
// var movieId = "429617";
// var imgServer = "https://image.tmdb.org/t/p/w500";
// $.ajax({
//     url: "https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+apiKey,
//     type: "GET",
//     success: function(response){
//         parseData(response);
//     }
// });
//https://api.themoviedb.org/3/search/movie?api_key=3bcb757b3ebe4adeeb1c3a7d2a3c4dcc&language=en-US&query=Hulk&page=1&include_adult=false

$("#search").on("click", function () {
   var currentQuery =  $("#query").val();
   getResult(currentQuery);
});


function getResult(query){
    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+query+"&page=1&include_adult=false",
        type: "GET",
        success: function(response){
            parseObjects(response.results);
        }
    });
}



var apiKey = "3bcb757b3ebe4adeeb1c3a7d2a3c4dcc";
var movieId = "429617";
var imgServer = "https://image.tmdb.org/t/p/w500";
$.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    type: "GET",
    success: function(response){
        parseObjects(response.results);
    }
});
function parseData(filmData) {
    var imgSrc = imgServer+filmData.poster_path;
    $("#filmImage").attr("src", imgSrc);
    $("#filmTitle").html(filmData.title);
    $("#filmDescription").html(filmData.overview);

}
function parseObjects(responseArray) {

    var container = $("#mainContainer");
    container.empty();
    responseArray.forEach(function (item) {
        var img = imgServer + item.poster_path;
        container.append("    <div class='card' style='width: 18rem;'>\n" +
            "        <img id='filmImage' src='"+img+"' class='card-img-top' alt=''>\n" +
            "        <div class='card-body'>\n" +
            "            <h5 id='filmTitle' class='card-title'>"+ item.title+"</h5>\n" +
            "            <p id='filmDescription' class='card-text'>"+ item.overview+"</p>\n" +
            "            <a href='#' class='btn btn-primary'>Go somewhere</a>\n" +
            "        </div>\n" +
            "    </div>");

    })
}