const version = ["beta", "1.0.0"];

//Imports
const { Entity } = require("./classes/entity");

const express = require("express");
const app = express();
const path = require("path");


app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "render/index.html");

  res.sendFile(filePath);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
