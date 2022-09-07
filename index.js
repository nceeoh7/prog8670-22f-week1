const express = require("express");
const path = require("path");

const app = new express();

app.use(express.static("public"));

app.listen(3001, () => {
  console.log("App listening on Port 3001");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});
