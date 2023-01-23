const processArgv = process.argv; // Import/store process arguments.

const netflixQueue = { // Object with several methods. 
  queue: [ // This will be the same at start of program unless modularize/use fs package.
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
    var list = ""; // Update to var/let;
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
    watchMovie(title);
  }
  else if (command === "add") {
    addMovie(title);
  }
  else if (command === "delete") {
    deleteMovie(title);
  } else if (command === "view") {
    viewMovies();
  }
  else {
    errorMessage(command);
  }
};

const watchMovie = (title) => {
    console.log(`Watching movie: ${title}`);
};

const addMovie = (title) => {
    console.log(`Adding movie: ${title}`);
};

const deleteMovie = (title) => {
    console.log(`Deleting movie: ${title}`);
};

const viewMovies = () => {
    console.log(netflixQueue.queue);
}

const errorMessage = (command) => {
    console.log(`Not a command: ${command}`);
    console.log(`The valid commands are 'add', 'watch', 'view' or 'delete'.`);
    console.log(`Follow the command with the film title.`);
    console.log(`If you do not enter a title, the most recent film added will be watched.`);
    // Might add an info/help function.
};

  // Function that runs .addMove() to a process argument.
  // Function that watches the most recent movie.
  // Function that deletes a movie from the list based on argument.
  // Do I want separate 'watched' and 'to watch' lists?
  // Something that returns if input isn't in the list. 
  // What do I do about full stops / punctuation? 
  // Modularise queue so it is stored.

parseArgv(processArgv);
