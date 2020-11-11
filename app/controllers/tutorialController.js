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
//*POST api
router.post("/", (req, res) => {
  var newRecord = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });
  newRecord.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in adding the record " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

//*Retrieve the date by searching title
module.exports = router;
