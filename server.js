// DEPENDENCIES
const express = require("express");
const fs = require("fs");
const path = require("path");

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Router
require("./routes/router")(app);

// Listener to start the server

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});