const router = require("express").Router();
const storeNotes = require("../db/storeNotes");

// API get request for retrieving existing notes
router.get("/notes", function (req, res) {
  storeNotes
    .retrieveNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// API post request for posting a new note
router.post("/notes", function (req, res) {
  storeNotes
    .addNote()
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// API delete request for deleting a note
router.delete("/notes/:id", function (req, res) {
  storeNotes
    .removeNote(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
