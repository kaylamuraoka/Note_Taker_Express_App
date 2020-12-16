// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const router = require("express").Router();
const path = require("path");

// ROUTING
// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

// GET /notes should return the notes.html file.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/notes.html"));
});

// GET * should return the index.html file.
// If no matching route is found default to home
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/index.html"));
});

module.exports = router;
