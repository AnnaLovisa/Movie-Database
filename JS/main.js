/* ================== MOVIE DATABASE ================== */



/* ================== Module Pattern ================== */


   /*   I have used a module pattern for this assignment. An advantage of structuring my functions in a module pattern like this
        may be that it makes it much more easier and readable when you organize your functions in the same way you do as you
        organize your objects. Another good part of it, is that you can decide which methods you want to make public, while
        the rest stays in the local/private scopes. We should avoid placing functions in the global scope and rather keep as 
        much as possible in the private scopes, only to call those functions we need. This to keep for example unauthorized away
        from sensitive data that could be misused. And this is where the module pattern comes in handy.

    */


const MovieDatabase = (() => {

    /* In this scope are my private functions/variables being declared.
    All movie-objects that are in my movies-array are therefore
    locally placed in an anonymous function with a namespace
    that I use when I want to do something with my functions in 
    the private scope */


    let movies =  [
{ 
    title: "The Great Gatsby",
    year: 2013,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SY1000_SX666_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NTM1NTg1Ml5BMl5BanBnXkFtZTgwOTgzMTMyMDE@._V1_SY1000_CR0,0,722,1000_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX675_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg",
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
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg",
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
        showAllMovies: () =>{
            var result = '';
            for(let i = 0; i < movies.length; i++){               
                       result += `<div class="col-sm-12 col-md-6 col-lg-3 movie-box">
                                  <h4 id="movieTitle">${movies[i].title}</h4>
                                  <h5 id=movieYear>${movies[i].year}</h5>
                                  <p><img class="img-fluid img-resize" alt="Responsive image" src="${movies[i].cover}"></p>
                                  <p><strong>Genres: </strong> ${movies[i].genres}</p>
                                  <p><strong>Ratings: </strong>${movies[i].ratings}</p>
                                  <p><strong>Average: </strong>${movies[i].average}</p>                                  
                                  `;                   
                    movies[i].actors.forEach(function(actor){
                        result += `<p>${actor.name}</p>`;                     
                    });            
                    result += `</div>`;
            }
            movies_all.innerHTML = result;
        },

        
        //Function that returns a list of all movies that had premiere that chosen year
        getMoviesThisYear: (year) => {
            var result = '';
            var actor = '';
            //Filtering all movies that had premiere the year typed in in the argument
            return movies.filter((movie) =>{
                return movie.year == year;                
                //Mapping out the titles of all those movies
                }).map((movie)=>{
                    result += `<div class="col-sm-12 col-md-6 col-lg-4 movie-box">
                                <h4 id="movieTitle">${movie.title}</h4>
                                <h5 id="movieYear">${movie.year}</h5>
                                <p><img class="img-fluid" src="${movie.cover}"></p>
                                <p><strong>Genres: </strong> ${movie.genres}</p>
                                <p><strong>Ratings: </strong><strong> ${movie.ratings}</p>
                                <p><strong>Average: </strong>${movie.average}</p>
                                `;
                        movie.actors.forEach(function(actor){
                            result += `<p>${actor.name}</p>`;                                    
                    });
                    result += `</div>`;
                    movies_all.innerHTML = result; 
                });
                                        
        },


        //Function that returns an average-value for each movie in the movies-array
         getAverageRating: () =>{
            //Looping through the whole movies-array to reach every movie's ratings-property that in turn is an array
            for(let i = 0; i < movies.length; i++){
                /* Counting the sum for every movie's ratings-array with reduce. totalValue is set to 0
                as startvalue and value sum up all the values for every movie's ratings-array. So for every
                loop, this is summed up for each movie. */          
                movies[i].ratings.reduce(function(totalValue, value){
                    //For every loop the new value is collected in the movies-array's average-property
                    movies[i].average += value;                           
                },0);           
             /*I get the actual average-rate for every movie by dividing every movie's ratings-arrays summed up value with 
            the length of every movies ratings-array for every loop. The average return a number with one decimal*/
            movies[i].average = (movies[i].average/movies[i].ratings.length).toFixed(1);
     
            }

            //Return all the movies after the loop
            return movies;
        },


        //Function that returns the movie with the highest average-value of the movie's ratings
        getTopRatedAverageMovie: () =>{            
            /* Return a reduce-function on the movies-array with two comparison-values that compare the average-properties with each other.
            If average-value before is higher than the averagevalue now, the code will return the valueBefore, otherwise the valueNow */
            return movies.reduce(function(valueBefore, valueNow) {
                return valueBefore.average > valueNow.average ? valueBefore : valueNow;

            });
        },

        //Function that returns the movie with the lowest average-value of the movie's ratings
        getWorstRatedAverageMovie: () =>{                          
                /* Return a reduce-function on the movies-array with two comparison-values that compare the average-properties with each other.
                If average-value before is lower than the average-value now, the code will return the valueBefore, otherwise the valueNow */
                return movies.reduce(function(valueBefore, valueNow) {
                    return valueBefore.average < valueNow.average ? valueBefore : valueNow;
            });       
        },


        /* Function that takes in a title of an already existing movie together with a new rating-value for that movie and returns that
        movie's ratings-array with the new rating-value */
        rateMovie: (title, rating)=>{
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

                var result = '';
                //Filtering out movies with genres same as in the arguments
                return movies.filter((movie) =>                
                    //If some of the values in the movies' genres-arrays correspond to either one of the below mentioned...
                    movie.genres.some((genres) => genres == genre1 || genres == genre2 || genres == genre3 || genres == genre4))
                    .map(movie => {             
                    /* ...and if the first sent in value is above the indexvalue in the genres-array (meaning if the
                    sent in value exists in the movie's genres-array) then the function will return all titles of those movies */
                    if(movie.genres.indexOf(genre1).length > 0)
                            movie.genres = genres;

                            result += `<div class="col-sm-12 col-md-6 col-lg-4 movie-box">
                                <h4 id="movieTitle">${movie.title}</h4>
                                <h5 id="movieYear">${movie.year}</h5>
                                <p><img class="img-fluid" src="${movie.cover}"></p>
                                <p><strong>Genres: </strong> ${movie.genres}</p>
                                <p><strong>Ratings: </strong> ${movie.ratings}</p>
                                <p><strong>Average: </strong> ${movie.average}</p>
                                `;
                            movie.actors.forEach(function(actor){
                            result += `<p>${actor.name}</p>`;  
                                        
                    });
                    result += `</div>`;
                    movies_all.innerHTML = result;                           
                });
                
            },  
        
        //Function that adds the created object in the Movie Database-object
        addMovietoDatabase: (newMovie)=>{
                //Placing the whole movies-array in a variable as a "new" array
                let newMoviesArray = movies;
                //Pushing my new object newMovie that has been created through the constructor in the "new array"
                newMoviesArray.push(newMovie);
                //Placing the whole updated array into another variable that is returned
                return newMoviesArray;
                
        }



//End of object with all functions in the module
}

//End of module
})();


        //Movie-Constructor function
        function Movie (title, year,  cover, genres, ratings, average, actors){

                this.title = title;
                this.year = year;
                this.cover = cover;
                this.genres = genres;
                this.ratings = ratings;
                this.average = average;
                this.actors = actors;
                this.setAverageRating();              
          
        }

        Movie.prototype = function(){

            //Function that sets the average-rating in the average-property from the countAverageRating 
            //with the argument from this ratings-value 
            setAverageRating = function(){
                if(this.ratings.length > 0)
                this.average = countAverageRating(this.ratings);
            };

            //Function that counts the average for a new movie
            countAverageRating = (ratings)=>{
                let total = ratings.reduce(function(totalValue, value){
                //For every loop the new value is collected in the movies-array's average-property
                    return totalValue += value;         
                },0);
                /* I get the actual average-rate for every movie by dividing the movie's ratings-arrays summed up value with 
                the length of the movie's ratings-array. The average return a number with one decimal*/
                    return (total/ratings.length).toFixed(1);
            };

        return {
            setAverageRating: setAverageRating            
        };
    }();
  


/* ================== Function outside the module to reach my functions inside the module with ================== */

    //Function that logs out those functions/variables I choose to make public in my MovieDatabase-object
    function printOutCode(){
        console.log("Get average-rate of chosen movie :", MovieDatabase.getAverageRating());  
    }
    printOutCode();


/* ================== Module Pattern for functions that handle the DOM and data from the user input ================== */


//Object with namespace getCode that contains all functions that take out and manipulate data from the user input
const getCode = (()=> {

    /* The anonymous function returns an object with all the functions/methods that belong to my modules
    and all the data that is uses. By returning my functions as an object like this, it is then possible to reach those
    functions I want to use for something. */

    return {

        //Function that prints out all movie-objects in the HTML-file on button-click
        printOutAllMovies: ()=>{
            //add eventlistener to button
            document.getElementById("submitButton_2").addEventListener("click", function(){
                //Call the function showAllMovies from my module
                MovieDatabase.showAllMovies();
            })
        },



        //Function that add movies from the user-input values to the Movies Database
        addMoviefromInput: ()=>{
            //Create a loop that creates a dropdown menu list of all years
            let start = 1900;
            let end = new Date().getFullYear();
            let options = "";
                for(let year = start; year <= end; year++){
                    options += "<option>"+ year +"</option>";
                }            
            //Put the option-element with all the looping years in the HTML-document
            document.getElementById("year").innerHTML = options;



            /*======== BUTTON CLICK EVENTS ========*/
            //Get the submit-button from HTML and add eventlistener to it
            document.getElementById("submitButton_1").addEventListener("click", function(){

            //Create an empty array-list
            let movieList = [];

            /*======== TITLE INPUT ========*/
            //Get the title input element from HTML
            let titleInput = document.getElementById("title");
            //Take out the value of the users title input
            let titleValue = titleInput.value;

            /*======== YEAR INPUT ========*/
            //Connects the year dropdown menu list in HTML with the users optional year input
            let yearSelect = document.getElementById("year");
            let yearOption = yearSelect.options[yearSelect.selectedIndex].value;

            /*======== COVER INPUT ========*/
            //Get the cover input element from HTML
            let coverInput = document.getElementById("cover").value;

            /*======== GENRE INPUT ========*/
            //Connects the genre dropdown menu list in HTML with the users optional genre input
            let genreSelect1 = document.getElementById("genreInput1");
            let genreOption1 = genreSelect1.options[genreSelect1.selectedIndex].value;

            //Connects the genre dropdown menu list in HTML with the users optional genre input
            let genreSelect2 = document.getElementById("genreInput2");
            let genreOption2 = genreSelect2.options[genreSelect2.selectedIndex].value;

            //Connects the genre dropdown menu list in HTML with the users optional genre input
            let genreSelect3 = document.getElementById("genreInput3");
            let genreOption3 = genreSelect3.options[genreSelect3.selectedIndex].value;
            

            //Create an empty array
            var genreArray = [];
            //Adds value of input genre to the empty array
            genreArray.push(genreOption1, genreOption2, genreOption3);


            /*======== RATINGS INPUT ========*/

            //Get the rating input element from HTML
            let ratingInput = parseInt(document.getElementById("rating").value);
            //Create an empty array
            var ratingArray = [];
            //Adds value of input rating to the empty array
            ratingArray.push(ratingInput);
            console.log(ratingArray);


            /*======== ACTORS INPUT ========*/

            //Create an empty array
            var actorArray = [];

            Array.prototype.slice.call(document.getElementsByClassName("actor"))
            //Looping through each inputvalue
            .forEach(function(actor){
            //Adds the inputvalue that I place in an objects property name to the empty array
            actorArray.push({name: actor.value});
            });
            //Call the createMovie function in the first module to this module together with the parametres
            let inputMovie = new Movie(titleValue, yearOption, coverInput, genreArray, ratingArray, 0 , actorArray);
            //Place the new movie into database
            MovieDatabase.addMovietoDatabase(inputMovie);
            console.log(inputMovie);

                    document.getElementById("title").value = "";
                    document.getElementById("year").options[0].selected = true;
                    document.getElementsByClassName("actor").value = "";
                    document.getElementById("rating").value = 6;
                    document.getElementById("genreInput1").options[0].selected = true;
                    document.getElementById("genreInput2").options[0].selected = true;
                    document.getElementById("genreInput3").options[0].selected = true;
                    document.getElementById("cover").value = "";

            })

        },

        //Function that prints out all movie-objects released this year on button-click
        printOutMovieYear: ()=>{
            document.getElementById("submitButton_3").addEventListener("click", function(){

                MovieDatabase.getMoviesThisYear(2016);
            })
        },

        //Function that prints out the top-rated movie-object on button-click
        printOutTopRatedMovie: ()=>{           
            document.getElementById("submitButton_4").addEventListener("click", function(){

                let topMovie = MovieDatabase.getTopRatedAverageMovie();
                movies_all.innerHTML = '';
                
                let movieHtml = `<div class="col-sm-12 col-md-6 col-lg-4 movie-box">
                                <h4 id="movieTitle">${topMovie.title}</h4>
                                <h5 id="movieYear">${topMovie.year}</h5>
                                <p><img class="img-fluid" src="${topMovie.cover}"></p>
                                <p><strong>Genres: </strong> ${topMovie.genres}</p>
                                <p><strong>Ratings: </strong> ${topMovie.ratings}</p>
                                <p><strong>Average: </strong> ${topMovie.average}</p>`

                                topMovie.actors.forEach(function(actor){
                                    movieHtml += `<p>${actor.name}</p>`;
                
                        }) 
                    movieHtml += `</div>`;
                    movies_all.innerHTML = movieHtml;              
                })
                
        },

        //Function that prints out the worst-rated movie-object on button-click
        printOutWorstRatedMovie: ()=>{           
            document.getElementById("submitButton_5").addEventListener("click", function(){

                let worstMovie = MovieDatabase.getWorstRatedAverageMovie();
                movies_all.innerHTML = '';
                
                let movieHtml = `<div class="col-sm-12 col-md-6 col-lg-4 movie-box">
                                <h4 id="movieTitle">${worstMovie.title}</h4>
                                <h5 id="movieYear">${worstMovie.year}</h5>
                                <p><img class="img-fluid" src="${worstMovie.cover}"></p>
                                <p><strong>Genres: </strong> ${worstMovie.genres}</p>
                                <p><strong>Ratings: </strong> ${worstMovie.ratings}</p>
                                <p><strong>Average: </strong> ${worstMovie.average}</p>`

                                worstMovie.actors.forEach(function(actor){
                                    movieHtml += `<p>${actor.name}</p>`;
               
                    }) 
                    movieHtml += `</div>`;
                    movies_all.innerHTML = movieHtml;                               
             })
        
        },   

        getRateMovie: ()=>{
         document.getElementById("submitButton_6").addEventListener("click", function(){

                /*======== TITLE INPUT ========*/
                //Get the title input element from HTML
                let titleInput = document.getElementById("title1").value;

                /*======== RATINGS INPUT ========*/
                //Get the rating input element from HTML
                let ratingInput = document.getElementById("rating1").value;

                MovieDatabase.rateMovie(titleInput, ratingInput);
        
            })
        },


        getSearchByGenre: ()=>{

            //Function that adds eventlisteners to the id from html
            let setGenreSubmitButton = function(){
                let inputValue_7 = document.getElementById("genre1");
                let inputValue_8 = document.getElementById("genre2");
                let inputValue_9 = document.getElementById("genre3"); 
                let inputValue_10 = document.getElementById("genre4"); 

                
                inputValue_7.addEventListener("change", submitSelectValue);
                inputValue_8.addEventListener("change", submitSelectValue);
                inputValue_9.addEventListener("change", submitSelectValue);
                inputValue_10.addEventListener("change", submitSelectValue);
                };

            let submitSelectValue = function(){
                //Connects the genre dropdown menu list in HTML with the users optional genre input
                let genreSelect1 = document.getElementById("genre1");
                let genreOption1 = genreSelect1.options[genreSelect1.selectedIndex].value;

                let genreSelect2 = document.getElementById("genre2");
                let genreOption2 = genreSelect2.options[genreSelect2.selectedIndex].value;

                let genreSelect3 = document.getElementById("genre3");
                let genreOption3 = genreSelect3.options[genreSelect3.selectedIndex].value;

                let genreSelect4 = document.getElementById("genre4");
                let genreOption4 = genreSelect4.options[genreSelect4.selectedIndex].value;
            
                MovieDatabase.getMoviesByGenre(genreOption1, genreOption2, genreOption3, genreOption4);
                };

            setGenreSubmitButton();

        },

        //Function that resets option, input- and values to display movies when buttons are clicked
        resetValues: ()=>{

                document.getElementById("submitButton_6").addEventListener("click", function(){
                    document.getElementById("title1").value = "";
                    document.getElementById("rating1").value = 6;                 
            })

                document.getElementById("submitButton_9").addEventListener("click", function(){
                    document.getElementById("genre1").options[0].selected = true;
                    document.getElementById("genre2").options[0].selected = true;
                    document.getElementById("genre3").options[0].selected = true;
                    document.getElementById("genre4").options[0].selected = true;
            })

                document.getElementById("submitButton_1").addEventListener("click", function(){
                    document.getElementById("title").value = "";
                    document.getElementById("year").options[0].selected = true;
                    document.getElementById("rating").value = 6;
                    document.getElementById("genreInput1").options[0].selected = true;
                    document.getElementById("genreInput2").options[0].selected = true;
                    document.getElementById("genreInput3").options[0].selected = true;
                    document.getElementById("cover").value = "";

            })

                document.getElementById("submitButton_11").addEventListener("click", function(){
                    movies_all.innerHTML = null;

            })
                
        }

    }
})();

//Call the functions in the getCode-module
getCode.printOutAllMovies();
getCode.addMoviefromInput();
getCode.printOutMovieYear();
getCode.printOutTopRatedMovie();
getCode.printOutWorstRatedMovie();
getCode.getRateMovie();
getCode.getSearchByGenre();
getCode.resetValues();




