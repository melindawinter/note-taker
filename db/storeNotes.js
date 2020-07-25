const fs = require("fs");
const util = require("util");

class Notes {
  constructor() {
    this.lastID = 0;
  }
  read() {
    return util.promisify(fs.readFile("db/db.json", "utf8"));
  }
  write(note) {
    return util.promisify(fs.writeFile("db/db.json", JSON.stringify(note)));
  }
  retrieveNotes() {
    return this.read().then((notes) => {
      let formattedNote;
      try {
        formattedNote = [].concat(JSON.parse(notes));
      } catch (err) {
        formattedNote = [];
      }
      return formattedNote;
    });
  }
  addNote(note) {
    const { noteTitle, noteText } = note;
    const newNote = { noteTitle, noteText, id: ++this.lastID };
    return this.retrieveNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNote(id) {
    return (
      this.retrieveNotes
        // use parseInt to compare the id; this.write at the end

        .then((updatedNotes) => this.write(updatedNotes))
    );
  }
}

module.exports = new Notes();
