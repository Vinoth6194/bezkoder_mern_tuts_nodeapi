const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./db");

// app.use((req, res, next) => {
//   res.send("VinServer for Bezkoder Tuts Tracker running at 8080");

//   console.log("Second middleware");
//   next();
// });
var tutorialRoutes = require("./app/controllers/tutorialController");
app.use(bodyParser.json());
app.use("/tutorials", tutorialRoutes);

app.listen(8080, () => {
  console.log("VinServer for Bezkoder Tuts Tracker running at 8080");
});
