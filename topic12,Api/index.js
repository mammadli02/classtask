// //Task1  Movie search , 

//     var movie = "Mr. Nobody";
//     var queryURL = "https://www.omdbapi.com/?apikey=206f2681" + "&t=" + movie;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var tBody = $("tbody");
//         var tRow = $("<tr>");
//         var titleTd = $("<td>").text(response.Title);
//         var yearTd = $("<td>").text(response.Year);
//         var actorsTd = $("<td>").text(response.Actors);
//         tRow.append(titleTd, yearTd, actorsTd);
//         tBody.append(tRow);
//     });
//     var movie = "The Lion King";
//     var queryURL = "https://www.omdbapi.com/?apikey=206f2681" + "&t=" + movie;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var tBody = $("tbody");
//         var tRow = $("<tr>");
//         var titleTd = $("<td>").text(response.Title);
//         var yearTd = $("<td>").text(response.Year);
//         var actorsTd = $("<td>").text(response.Actors);
//         tRow.append(titleTd, yearTd, actorsTd);
//         tBody.append(tRow);
//     });
//    


//Task2 Movie search
//         var { el, queryURL } = newFunction();   
//     function newFunction() {
//         var moves=["Mr. Nobody", "The Lion King","Yuxu"]
//     for( el of moves){
//     var queryURL = "https://www.omdbapi.com/?apikey=206f2681" + "&t=" + el;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var tBody = $("tbody");
//         var tRow = $("<tr>");
//         var titleTd = $("<td>").text(response.Title);
//         var yearTd = $("<td>").text(response.Year);
//         var actorsTd = $("<td>").text(response.Actors);
//         tRow.append(titleTd, yearTd, actorsTd);
//         tBody.append(tRow);
//    });
// }
//   return { el, queryURL };
//    }





   //Task3 Movie search

//    // Initial array of movies
//    var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
//    // Function for dumping the JSON content for each button into the div
//    function displayMovieInfo() {
//        let movie=$(this).text();
//        $.ajax({
//            url:`https://www.omdbapi.com/?apikey=206f2681&t=${movie}`,
//         method: "GET"

//        }).then(response =>{
//            $("#movies-view").text(JSON.stringify(response))
//        })

//        }
//      // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
   
//    // Function for displaying movie data
//    function renderButtons() {
//      // Deleting the buttons prior to adding new movies
//      // (this is necessary otherwise you will have repeat buttons)
//      $("#buttons-view").empty();
//      // Looping through the array of movies
//      for (var i = 0; i < movies.length; i++) {
//        // Then dynamicaly generating buttons for each movie in the array
//        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//        var myButton = $("<button>");
//        // Adding a class of movie to our button
//        myButton.addClass("movie");
//        // Adding a data-attribute
//        myButton.attr("data-name", movies[i]);
//        // Providing the initial button text
//        myButton.text(movies[i]);
//        // Adding the button to the buttons-view div
//        $("#buttons-view").append(myButton);
//      }
//    }
//    // This function handles events where one button is clicked
//    $("#add-movie").on("click", function(event) {
//      event.preventDefault();
//      // This line grabs the input from the textbox
//      var movie = $("#movie-input").val().trim();
//      // The movie from the textbox is then added to our array
//      movies.push(movie);
//      // Calling renderButtons which handles the processing of our movie array
//      renderButtons();
//    });
//    // Generic function for displaying the movieInfo
//    $(document).on("click", ".movie", displayMovieInfo);
//    // Calling the renderButtons function to display the intial buttons
//    renderButtons();



//Task4  seherler olkeler windy.....
// $("#search").on("click",function(){

//     let location=$("#location").val().trim();
//     search(location)
// })
//  function search(location){
//     var APIKey = "166a433c57516f51dfab1f7edaed8413";
//     // Here we are building the URL we need to query the database
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" +APIKey +  "&units=metric";
//      // We then created an AJAX call
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

// $('.city').text(`City:${JSON.stringify(response.name)}`);
// $('.wind').text(`
// wind speed: ${JSON.stringify(response.wind.speed)}
// wind degree: ${JSON.stringify(response.wind.deg)}
// wind gust: ${JSON.stringify(response.wind.gust)}
// `);
// $('.humidity').text(`humidity:${JSON.stringify(response.main.humidity)}`);
// $('.temp').text(`Temp:${JSON.stringify(response.main.temp)}`);
// })
// }




//Task5 Cats
// $("#cat-button").on("click",function(){
//     var apiKey = 'ON9cCH91jRQF0W7q4DLTsgB2mm1uRxJe';
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key="+apiKey+"&tag=cats";
//     $.ajax({
//         url:queryURL,
//         method: "GET"
//     }).then(function(response){

// let img = `<img src="${response.data.images.fixed_width_still.url}"/>`;
//         $('#images').prepend(img);
//  })
// })