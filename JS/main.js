/* ================== MOVIE DATABASE ================== */



/* ================== Module Pattern ================== */


let MovieDatabase = (function() {

    //I detta scope deklareras privata funktioner/variabler
    //Alla film-objekt som ligger i min movies array är alltså privata
    //och samlade i en anonym funktion med en namespace som jag använder
    //när jag vill göra något med det i det privata scopet

    var movies =  [
{ 
    title: "The Great Gatsby",
    year: 2013,
    cover: "http://www.boweryboogie.com/content/uploads/2013/05/The-Great-Gatsby-Movie-2013.jpg",
    genres: ['Drama', 'Romance'],
    ratings: [7], 
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
    ratings: [7],
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
    ratings: [8],
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
    ratings: [9],
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
    ratings: [9],
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
    ratings: [8],
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
    ratings: [7],
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
    ratings: [9],
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

/*Hela funktionen returnerar ett enda objekt med alla funktioner som tillhör våra moduler
och all data som den använder. Varje funktion blir i sin tur ett objekt. Genom att returnera
ut alla funktioner som ett objekt kommer man sen åt funktionerna och kan göra vad man vill med dem*/

return {

        //Funktion som skriver ut/visar alla filmer
        showAllMovies: function(){

            //Vi refererar till movies som är i scopet ovan och därför tillgängligt i denna funktion. Den finns alltså i en closure
            return movies.map((movie) => {

                //Returnerar titlarna på alla filmerna
                return movie.title;
            },0);

        },



        //Funktion som returnerar en lista över alla filmer som haft premiär det valda året year.
        getMoviesThisYear: function(year){

            //Filtrerar ut alla filmer som stämmer överens med året som skickas in som argument
            return movies.filter((movie) =>{
                return movie.year == year;

                //Gör en map-funktion som returnerar ut titlarna på dessa filmer
                }).map(function(movie){
                    return movie.title;
                },0);
        },


        /* Problem: Funktionen skriver endast ut en film även om det finns flera med samma rating */
        
        //Funktion som returnerar det objektet som motsvarar den film som har bäst genomsnittligt betyg
        getTopRatedMovie: function(){

            //Skapar en max-värde-variabel som börjar på första indexet i movies ratings-array
            let maxValue = movies[0].ratings;

            //Skapar en variabel som börjar på första indexet i movies-arrayen
            let result = movies[0];

            //Loopar igenom movies-arrayen
            for (var i = 0; i < movies.length; i++){

                //Om värdet på ratingens index som loopas igenom överstiger max-värdet blir ratingens index det nya max-värdet som utgångsvärde
                //Filmen med ratingens max-värde hamnar då i resultat-variabeln inför nästa loop
                if(movies[i].ratings > maxValue){
                    maxValue = movies[i].ratings;
                    result = movies[i];
                }
            }
            //Den slutgiltiga filmens titel returneras
            return result.title;
        },


        /* Problem: Funktionen skriver endast ut en film även om det finns flera med samma rating */
    
        //Funktion som returnerar det objektet som motsvarar den film som har sämst genomsnittligt betyg.
        //Räkna inte med filmer som inte fått något betyg än
        getWorstRatedMovie: function(){

            //Skapar en min-värde-variabel som börjar på första indexet i movies ratings-array
            let minValue = movies[0].ratings;

            //Skapar en variabel som börjar på första indexet i movies-arrayen
            let result = movies[0];

            //Loopar igenom movies-arrayen
            for (var i = 0; i < movies.length; i++){
                //Om värdet på ratingens index som loopas igenom understiger min-värdet blir ratingens index det nya min-värdet som utgångsvärde
                //Filmen med ratingens min-värde hamnar då i resultat-variabeln inför nästa loop
                if (movies[i].ratings < minValue){
                    minValue = movies[i].ratings;
                    result = movies[i];
                }   
            }
            //Den slutgiltiga filmens titel returneras
            return result.title;
        },


 
    

        //Funktion som skapar ett objekt genom en konstruktor och lägger värdet på parametrarna som egenskaper i objektet
        createMovie: function(title, year,  cover, genres, ratings, actors){
            
            //Konstruktor
            function Movie(){
                this.title = title;
                this.year = year;
                this.cover = cover;
                this.genres = genres;
                this.ratings = ratings;
                this.actors = actors;       
            }

            //Funktion som lägger till det skapade objektet i databasen
            function addMovie(){

                //Lägger hela movies-objektet i en variabel som en "ny array"
                let newMoviesArray = movies;

                //Pushar in mitt nya objekt newMovie som skapats genom konstruktorn i den "nya arrayen"
                newMoviesArray.push(newMovie);

                //Lägger hela den uppdaterade arrayen i en till variabel som returneras
                movie = newMoviesArray; 
                return movie;          
            }

            //Skapar nytt objekt från konstruktorn
            let newMovie = new Movie();
            //returnerar funktionen som lägger till det skapade objektet i databasen där jag skickar in mitt nya objekt som argument            
            return addMovie(newMovie);
            
        },



      
        //Funktion som lägger till värdet på parametern rate till egenskapen ratings i objektet Movie

        //Funktion som tar in en titel på en film, ett nytt rating-värde för filmen och returnerar filmens nya rating-array i databasen
        rateMovie: function(title, rating){

            //Filtrerar ut den film vars titel stämmer överens med det inskickade argumentet
             return movies.filter((movie) =>{
                    return movie.title == title;

                //Mappar ut filmens rating-array
                }).map(function(movie){
                   
                    //Lägger till den inskickade ratingen till den valda filmen och returnerar det
                    return movie.ratings.push(rating);

                        //Returnerar ut rating-arrayen
                        return ratings.rating;

                },0);

        },

        //Funktion som skriver ut alla objekt
        printObject: function(){
                return movies;
        },

        
        //Kan inte filtrera på flera genres änsålänge
        //Funktion som returnerar alla filmer som har samma genre som värdet på parametern genre (ska kunna filtrera på flera genrer)
        getMoviesByGenre: function(genre){
                
                //Filtrerar ut de filmer som har en genre som stämmer överens med den inskickade genren
                return movies.filter((movie) =>
                    movie.genres.some((genres) => genres == genre))

                    .map(movie => {
              
                    //Mappar ut de filmer som har index-värden som stämmer överens med det inskickade genres-argumentet
                    if(movie.genres.indexOf(genre).length > 0)
                    
                    //Definierar filmernas egenskaper så att filmernas titlar loggas ut
                    MovieDatabase.defineProperty(movie, genres)
                    return movie.title;
                         
                },0)  
        },







//Här slutar return av objektet med alla funktioner
}

})();


//Skapar en funktion som skriver ut de funktioner/variabler jag valt att göra publika i min MovieDatabase
function printOutCode(){
    console.log("Show all movies: ",  MovieDatabase.showAllMovies());
    console.log("Get movies this year: ", MovieDatabase.getMoviesThisYear(2001));
    console.log("Get top rated movie: ", MovieDatabase.getTopRatedMovie());
    console.log("Get worst rated movie: ", MovieDatabase.getWorstRatedMovie());
    console.log("Create movie: ", MovieDatabase.createMovie('Avatar', 2009, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg", ['Action', 'Adventure', 'Fantasy'], [8], ['Sam Worthington', 'Zoe Saldana']))
    console.log("Show all movies: ", MovieDatabase.showAllMovies());
    console.log("Rate movie: ", MovieDatabase.rateMovie('Inglorious Basterds', 9));
    console.log("Print out all objects :", MovieDatabase.printObject());
    console.log("Get movies by genre :", MovieDatabase.getMoviesByGenre('Romance'));
}
printOutCode();






