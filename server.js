const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
