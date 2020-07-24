var path = require("path");
var router = require("express").Router();

// HTML GET Requests

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to index
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
