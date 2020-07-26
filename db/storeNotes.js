const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  constructor() {
    this.lastID = 0;
  }
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  retrieveNotes() {
    return this.read().then((notes) => {
      let formattedNotes;
      try {
        formattedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        formattedNotes = [];
      }
      return formattedNotes;
    });
  }
  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Please add a title and note text.");
    }
    const newNote = { title, text, id: ++this.lastID };
    return this.retrieveNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNote(id) {
    return this.retrieveNotes()
      .then((notes) => notes.filter((note) => note.id !== parseInt(id)))
      .then((remainingNotes) => this.write(remainingNotes));
  }
}

module.exports = new Notes();
