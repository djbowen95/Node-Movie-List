const processArguments = process.argv; // Import/store process arguments.

const netflixQueue = {
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

const parseArgv = () => {
    try {
        console.log(processArguments[2]);
    } catch (err) {
        console.log("Incorrect command"); // This doesn't work, returns undefined.
    }
}

parseArgv();