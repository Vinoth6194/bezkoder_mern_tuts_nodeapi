const express = require("express");
const router = express.Router();

var { Tutorial } = require("../models/tutorial");
var ObjectID = require("mongoose").Types.ObjectId;

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

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  var updatedRecord = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  Tutorial.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record : " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});
module.exports = router;
