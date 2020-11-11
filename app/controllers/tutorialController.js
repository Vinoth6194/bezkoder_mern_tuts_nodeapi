const express = require("express");
const router = express.Router();

var { Tutorial } = require("../models/tutorial");

//*GET api
router.get("/", (req, res) => {
  Tutorial.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      "Error in retrieving the records " + JSON.stringify(err, undefined, 2);
    }
  });
});
module.exports = router;
