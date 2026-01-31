const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// خليه يعرف فين html
app.use(express.static(__dirname));

// route رئيسي
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
