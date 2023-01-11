const express = require("express");

const { upload } = require("./controller");

const uploadRouter = express.Router();

uploadRouter.post("/upload", upload.single("data"), (req, res) => {
 
  res.send(req.file)
},(error, req, res, next) => {
  res.status(400).send({ error: error.message })
});

module.exports = uploadRouter;
