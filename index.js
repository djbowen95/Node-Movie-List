const processArgv = process.argv; // Import/store process arguments.

const netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club",
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
      list += this.queue.length - i + ". " + currentMovie + "\n";
    }
    console.log(list);
  },
};

const parseArgv = (argv) => {
  let command = argv[2].toLowerCase(); // Make lowercase.
  let title = argv[3]; // Want this to include everything after 3.
  if (command === "watch") {
    console.log("Watch");
  }
  if (command === "add") {
    console.log("Add");
  }
};

parseArgv(processArgv);
