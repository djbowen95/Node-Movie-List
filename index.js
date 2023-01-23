const processArgv = process.argv; // Import/store process arguments.

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

const parseArgv = (argv) => {
    try {
        if (argv[2] === "watch") {
            console.log("Watch");
        }
        if (argv[2] === "add") {
            console.log("Add");
        }
    } catch (err) { // Doesn't catch this as an error either. 
        console.log("Caught err: ");
        console.log(err);
    }
}

parseArgv(processArgv);