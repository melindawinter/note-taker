const fs = require("fs");
const path = require("path");


// Update the db.json file when a note is added or removed
function updateDataBase() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
      if (err) throw err;
      return true;
    }

    ) ;
  }

  //   // Function to get notes
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    // Create notes variable
    let notes = JSON.parse(data);
  }