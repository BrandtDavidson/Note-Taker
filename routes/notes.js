const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// A get route for getting back all of the notes
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Here is the post route for posting new notes from the request
notes.post("/", (req, res) => {
  console.log(req.body);
  // destructuring for the items in the req.body (request body)
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added 📝`);
  } else {
    res.error("Error in adding note ❌");
  }
});

// another route for deleting the notes per the request --> based on public/assets/js/index.js --> deleteNote() with method: 'DELETE'
// Delete route for a note with a matching id
notes.delete("/:id", (req, res) => {
    res.json('Deleted');
});

module.exports = notes;
