const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.send("VinServer for Bezkoder Tuts Tracker running at 8080");

  console.log("Second middleware");
  next();
});
app.listen(8080, () => {
  console.log("VinServer for Bezkoder Tuts Tracker running at 8080");
});
