const mongoose = require("mongoose");
var Tutorial = mongoose.model(
  "Tutorial",
  {
    title: String,
    description: String,
    published: Boolean,
  },
  { timestamps: true },
  "tutorials"
);
module.exports = { Tutorial };
