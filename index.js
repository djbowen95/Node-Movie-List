// Starter code: this is code I took from one of the BootCamp exercises.
// It was used to demonstrate that Arrow functions do not work in an object with 'this'.
var netflixQueue = {
    queue: [
      "Mr. Nobody",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
      "Fight Club"
    ],
    watchMovie: function () {
      this.queue.pop();
    },
    addMovie: function (movie) {
      this.queue.unshift(movie);
    },
    printQueue: function () {
      var list = "";
      for (var i = this.queue.length - 1; i >= 0; i--) {
        var currentMovie = this.queue[i];
        list += (this.queue.length - i) + ". " + currentMovie + "\n";
      }
      console.log(list);
    }
  };

  // Function that parses the arguments.
  // Function that runs .addMove() to a process argument.
  // Function that watches the most recent movie.
  // Function that deletes a movie from the list based on argument.
  // Do I want separate 'watched' and 'to watch' lists?
  // Something that returns if input isn't in the list. 
  // What do I do about full stops / punctuation? 
  
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();
  netflixQueue.watchMovie();
  console.log("\nWatched a movie!\n");
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();
  console.log("\nAdding a movie!\n");
  netflixQueue.addMovie("Black Swan");
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();