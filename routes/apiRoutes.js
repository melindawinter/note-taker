
const fs = require('fs');
const path = require ('path');


module.exports = function (app) {
  
  // Function to get notes
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    // Create notes variable
    let notes = JSON.parse(data);
  }

  
  
  // API GET Requests
app.get("/api/notes", function (req, res) {
    res.json(notes);
  });


  // API POST Requests

  app.post("/api/notes", function (req, res) {
let newNote = 
      notes.push(newNote);
      res.json(true);
updateDataBase()
    
  });



  // Update the db.json file when a note is added or removed
  function updateDataBase() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
      if (err) throw err;
      return true;
    }
    
    ) ;
  }


}

