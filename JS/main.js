/* ================== MOVIE DATABASE ================== */



/* ================== Module Pattern ================== */


   /*   I have used a module pattern for this assignment. An advantage of structuring my functions in a module pattern like this
        may be that it makes it much more easier and readable when you organize your functions in the same way you do as you
        organize your objects. Another good part of it, is that you can decide which methods you want to make public, while
        the rest stays in the local/private scopes. We should avoid placing functions in the global scope and rather keep as 
        much as possible in the private scopes, only to call those functions we need. This to keep for example unauthorized away
        from sensitive data that could be misused. And this is where the module pattern comes in handy.

    */




let MovieDatabase = (function() {

    /* In this scope are my private functions/variables being declared.
    All movie-objects that are in my movies-array are therefore
    locally placed in an anonymous function with a namespace
    that I use when I want to do something with my functions in 
    the private scope */


    var movies =  [
{ 
    title: "The Great Gatsby",
    year: 2013,
    cover: "http://www.boweryboogie.com/content/uploads/2013/05/The-Great-Gatsby-Movie-2013.jpg",
    genres: ['Drama', 'Romance'],
    ratings: [7, 4, 6],
    average: 0, 
    actors: [
		{
		name: "Leonardo DiCaprio"
		},
		{
		name: "Carey Mulligan"
		}	
	]
},


{ 
    title: "Oceans Eleven",
    year: 2001,
    cover: "https://movierob.files.wordpress.com/2014/02/oceans-eleven.jpg",
    genres: ['Drama','Romance'],
    ratings: [7, 8, 5],
    average: 0,
    actors: [
		{
		name: "George Clooney"
		},
		{
		name: "Julia Roberts"
		}	
	]
},


{ 
    title: "V for Vendetta",
    year: 2005,
    cover: "http://vignette3.wikia.nocookie.net/marvel_dc/images/6/67/V_for_Vendetta_movie_poster.JPG/revision/latest?cb=20071212185824",
    genres: ['Action', 'Drama', 'Thriller'],
    ratings: [8, 3, 4, 6],
    average: 0,
    actors: [
		{
		name: "Hugo Weaving"
		},
		{
		name: "Natalie Portman"
		}	
	]
},

{ 
    title: "Pulp Fiction",
    year: 1994,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genres: ['Crime', 'Drama'],
    ratings: [9, 7, 3, 9],
    average: 0,
    actors: [
		{
		name: "John Travolta"
		},
		{
		name: "Uma Thurman"
		}	
	]
},

{ 
    title: "Spirited Away",
    year: 2001,
    cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.JPG",
    genres: ['Animation', 'Adventure', 'Family'],
    ratings: [9, 9],
    average: 0,
    actors: [
		{
		name: "Daveigh Chase"
		},
		{
		name: "Suzanne Pleshette"
		}	
	]
},


{ 
    title: "Inglorious Basterds",
    year: 2009,
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
    genres: ['Drama', 'Adventure', 'War'],
    ratings: [8, 9, 9],
    average: 0,
    actors: [
		{
		name: "Brad Pitt"
		},
		{
		name: "Diane Kruger"
		}	
	]
},


{ 
    title: "I am Legend",
    year: 2007,
    cover: "https://img.123clouds.ru/2015/09/19/poster/I_am_Legend_1.jpg",
    genres: ['Drama', 'Horror', 'Sci-Fi'],
    ratings: [7, 6, 8],
    average: 0,
    actors: [
		{
		name: "Will Smith"
		},
		{
		name: "Alice Braga"
		}	
	]
},


{ 
    title: "La La Land",
    year: 2016,
    cover: "http://pics.filmaffinity.com/la_la_land-262021831-large.jpg",
    genres: ['Drama', 'Comedy', 'Musical'],
    ratings: [9, 6],
    average: 0,
    actors: [
		{
		name: "Ryan Gosling"
		},
		{
		name: "Emma Stone"
		}	
	]
},


];


    /* The anonymous function returns an object with all the functions/methods that belong to my modules
    and all the data that is uses. By returning my functions as an object like this, it is then possible to reach those
    functions I want to use for something. */


return {

        //Function that returns all movies at the same time
        showAllMovies: function(){

            var result = '';
            for(var i = 0; i < movies.length; i++){
                
                       result += `<p>${movies[i].title}</p>
                                  <p>${movies[i].year}</p>
                                  <p><img src="${movies[i].cover}"></p>
                                  <p>${movies[i].genres}</p>
                                  <p>${movies[i].ratings}</p>
                                  <p>${movies[i].average}</p>
                                  
                                  `;
                    
                    movies[i].actors.forEach(function(actor){
                        result += `<p>${actor.name}</p>`;      
                    });

            }
            movies_1.innerHTML = result;
            
        },


        //Function that returns a list of all movies that had premiere that chosen year
        getMoviesThisYear: function(year){

            //Filtering all movies that had premiere the year typed in in the argument
            return movies.filter((movie) =>{
                return movie.year == year;

                //Mapping out the titles of all those movies
                }).map(function(movie){
                    return movie.title;
                },0);
        },



        getAverageRating: function(){

            //Looping through the whole movies-array to reach every movie's ratings-property that in turn is an array
            for(let i = 0; i < movies.length; i++){

                /* Counting the sum for every movie's ratings-array with reduce. totalValue is set to 0
                as startvalue and value sum up all the values for every movie's ratings-array. So for every
                loop, this is summed up for each movie. */          
                movies[i].ratings.reduce(function(totalValue, value){

                    //For every loop the new value is collected in the movies-array's average-property
                    movies[i].average += value;
                            
                },0);
            
            /* I get the actual average-rate for every movie by dividing every movie's ratings-arrays summed up value with 
            the length of every movie's ratings-array for every loop. The average return a number with one decimal */
            movies[i].average = (movies[i].average/movies[i].ratings.length).toFixed(1);
     
            }

            //Return all the movies after the loop
            return movies;

        },



        //Function that returns the movie with the highest average-value of the movie's ratings
        getTopRatedAverageMovie: function(){

            /* Return a reduce-function on the movies-array with two comparison-values that compare the average-properties with each other.
            If average-value before is higher than the averagevalue now, the code will return the valueBefore, otherwise the valueNow */
            return movies.reduce(function(valueBefore, valueNow) {
                return valueBefore.average > valueNow.average ? valueBefore : valueNow;
            });
        },



        //Function that returns the movie with the lowest average-value of the movie's ratings
        getWorstRatedAverageMovie: function(){
                           
                /* Return a reduce-function on the movies-array with two comparison-values that compare the average-properties with each other.
                If average-value before is lower than the average-value now, the code will return the valueBefore, otherwise the valueNow */
                return movies.reduce(function(valueBefore, valueNow) {
                    return valueBefore.average < valueNow.average ? valueBefore : valueNow;
            });
        
        },



        /* Problem: Funktionen skriver endast ut en film även om det finns flera med samma rating-värden */
        
        //Function that returns the movie with the highest rating
        getTopRatedMovie: function(){

            //Create a max-value-variable that starts at first index in the movies' ratings-array
            let maxValue = movies[0].ratings;

            //Create a variable that starts at first index in the movies-array
            let result = movies[0];

            for (var i = 0; i < movies.length; i++){

                /*If the value of the ratings index being looped through is above the max-value, the ratings index is placed in the new
                 max-value as the new default-value. The movie with that rating's max-value are then placed in the result-variable for the
                 next loop*/
                if(movies[i].ratings > maxValue){

                    maxValue = movies[i].ratings;
                    result = movies[i];
                }
            }

            //Return the final title of the movie with the highest ratings-value
            return result.title;
        },


        /* Problem: Funktionen skriver endast ut en film även om det finns flera med samma rating-värden */
    

        //Function that returns the movie with the lowest rating
        getWorstRatedMovie: function(){

            //Create a min-value-variable that starts at first index in the movies' ratings-array
            let minValue = movies[0].ratings;

            //Create a variable that starts at first index in the movies-array
            let result = movies[0];

            for (var i = 0; i < movies.length; i++){

                /*If the value of the ratings index being looped through is under the min-value, the ratings index is placed in the new
                 min-value as the new default-value. The movie with that rating's min-value are then placed in the result-variable for the
                 next loop*/
                if (movies[i].ratings < minValue){
                
                    minValue = movies[i].ratings;
                    result = movies[i];

                }   
            }

            //Return the final title of the movie with the lowest ratings-value
            return result.title;
        },



        //Function that creates an object through a constructor and put the value of the parameters as properties in the object
        createMovie: function(title, year,  cover, genres, ratings, average, actors){
            
            //Movie-Constructor
            function Movie(){
                this.title = title;
                this.year = year;
                this.cover = cover;
                this.genres = genres;
                this.ratings = ratings;
                this.average = average;
                this.actors = actors;       
            }


            //Function that adds the created object in the Movie Database-object
            function addMovie(){

                //Placing the whole movies-array in a variable as a "new" array
                let newMoviesArray = movies;

                //Pushing my new object newMovie that has been created through the constructor in the "new array"
                newMoviesArray.push(newMovie);

                //Placing the whole updated array into another variable that is returned
                movie = newMoviesArray; 
                return movie;          
            }

            //Create a new object called newMovie
            let newMovie = new Movie();

            //Return the function addMovie with my new Movie-object as argument            
            return addMovie(newMovie);
            
        },



        /* Function that takes in a title of an already existing movie together with a new rating-value for that movie and returns that
        movie's ratings-array with the new rating-value */
        rateMovie: function(title, rating){

            //Filtering out the movie who has a title the same as in the sent in title-argument
             return movies.filter((movie) =>{
                    return movie.title == title;

                //Mapping out the movie's ratings-array
                }).map(function(movie){
                   
                    //Adding the rating-value that is sent in as an argument to the chosen movie's ratings array
                    return movie.ratings.push(rating);

                    //Return the updated ratings-array
                    return ratings.rating;

                },0);

        },

    
        //Function that returns all movies that have the same genre as the values in the parameter genre
        getMoviesByGenre: function(genre1, genre2, genre3, genre4){
                
                //Filtering out movies with genres same as in the arguments
                return movies.filter((movie) =>
                
                    //If some of the values in the movies' genres-arrays correspond to either one of the below mentioned...
                    movie.genres.some((genres) => genres == genre1 || genres == genre2 || genres == genre3 || genres == genre4))

                    .map(movie => {
              
                    /* ...and if the first sent in value is above the indexvalue in the genres-array (meaning if the
                    sent in value exists in the movie's genres-array) then the function will return all titles of those movies */
                    if(movie.genres.indexOf(genre1).length > 0)

                            movie.genres = genres;
                            return movie.title;
                                  
                },0)  
        },



//End of object with all functions in the module
}

//End of module
})();



/* ================== Function outside the module to reach my functions inside the module with ================== */



    //Function that logs out those functions/variables I choose to make public in my MovieDatabase-object
    function printOutCode(){
        /*console.log("Show all movies: ", MovieDatabase.showAllMovies());*/
        console.log("Get movies from year: ", MovieDatabase.getMoviesThisYear(2001));
        console.log("Get top rated movie: ", MovieDatabase.getTopRatedMovie());
        console.log("Get worst rated movie: ", MovieDatabase.getWorstRatedMovie());
        console.log("Get average-rate of chosen movie :", MovieDatabase.getAverageRating());
        console.log("Get top rated average movie: ", MovieDatabase.getTopRatedAverageMovie());
        console.log("Get worst rated average movie: ", MovieDatabase.getWorstRatedAverageMovie());
        /*console.log("Create movie: ", MovieDatabase.createMovie('Avatar', 2009, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg", ['Action', 'Adventure', 'Fantasy'], [8], 0, ['Sam Worthington', 'Zoe Saldana']))*/        
        /*console.log("Show all movies: ", MovieDatabase.showAllMovies());*/
        console.log("Rate movie: ", MovieDatabase.rateMovie('Inglorious Basterds', 9));
        console.log("Get movies by genre :", MovieDatabase.getMoviesByGenre('Thriller', 'Adventure', 'Horror'));
    }
    printOutCode();




/* Jag har inte hunnit skapa min kod som får användaren att skicka in värden med hjälp av funktionerna. 
Den funktionen jag skrivit som fungerar men som heller inte är klar skriver ut alla filmer när man klickar
på Add movies. Tanken är att skriva alla de funktioner som hämtar data från användaren utanför modulen och
att jag i de funktionerna kallar på mina lokala funktioner i modulen som jag behöver så som jag gjort
ovan när jag bara console.loggat ut koden. Så jag vill separera de funktioner som hanterar min Movie databas
från de funktioner som hanterar informationen från användar-inputen för att skapa ordning på torpet */




/* ================== Module Pattern for functions that handle the DOM and data from the user input ================== */


//Object with namespace getCode that contains all functions that take out and manipulate data from the user input
let getCode = (function() {


    /* The anonymous function returns an object with all the functions/methods that belong to my modules
    and all the data that is uses. By returning my functions as an object like this, it is then possible to reach those
    functions I want to use for something. */


    return {

        //Function that prints out all movie-titles in the HTML-file on button-click
        printOutAllMovies: function(){

        //Get out button from HTML
        let inputValue_2 = document.getElementById("submitButton_2");


        //Adding the submit-button to an eventlistener
        inputValue_2.addEventListener("click", function(){

            //Call the function showAllMovies from my module
            MovieDatabase.showAllMovies();

            })
        },


        //Function that add movies from the user-input values to the Movies Database
        addMoviefromInput: function(){


            //Create a loop that creates a dropdown menu list of all years
            var start = 1900;
            var end = new Date().getFullYear();
            var options = "";
                for(var year = start ; year <= end; year++){
                    options += "<option>"+ year +"</option>";
                }
            //Put the option-element with all the looping years in the HTML-document
            document.getElementById("year").innerHTML = options;


            /*======== BUTTON CLICK EVENTS ========*/
            //Get the submit-button from HTML
            let inputValue_1 = document.getElementById("submitButton_1");

            //Add an eventlistener to the submit-button
            inputValue_1.addEventListener("click", function(){

            //Create an empty array-list
            var movieList = [];


            /*======== TITLE INPUT ========*/
            //Get the title input element from HTML
            let titleInput = document.getElementById("title");

            //Take out the value of the users title input
            let titleValue = titleInput.value;


            /*======== YEAR INPUT ========*/
            //Connects the year dropdown menu list in HTML with the users optional year input
            var yearSelect = document.getElementById("year");
            var yearOption = yearSelect.options[yearSelect.selectedIndex];
            let yearValue = yearOption.value;


            /*======== COVER INPUT ========*/
            //Get the cover input element from HTML
            let coverInput = document.getElementById("cover");

            //Take out the value of the users cover input
            let coverValue = coverInput.value;


            /*======== GENRE INPUT ========*/
            //Connects the genre dropdown menu list in HTML with the users optional genre input
            let genreSelect = document.getElementById("genre");
            let genreOption = genreSelect.options[genreSelect.selectedIndex];
            let genreValue = genreOption.value;


            /*======== RATINGS INPUT ========*/
            //Get the rating input element from HTML
            let ratingInput = document.getElementById("rating");

            //Take out the value of the users title input
            let ratingValue = parseInt(ratingInput.value);



            /*======== ACTORS INPUT ========*/
            //Get the actor input element from HTML
            let actorInput_1 = document.getElementById("actor_1");
            //Get the actor input element from HTML
            let actorInput_2 = document.getElementById("actor_2");

            //Take out the value of the users actor input
            let actorValue = actorInput_1.value + actorInput_2.value;



            //Call the createMovie function in the first module to this module together with the parametres
            var movie = MovieDatabase.createMovie(titleValue, yearValue, coverValue, genreValue, ratingValue, actorValue);

            //Push the new movie into the empty list
            movieList.push(movie);
            console.log(movieList);


            })


        }
    }

})();


//Call the functions in the getCode-module
getCode.printOutAllMovies();
getCode.addMoviefromInput();










