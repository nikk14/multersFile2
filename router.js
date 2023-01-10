const express = require("express");

// const { upload } = require("./controller");
// import controller from './controller.js'
const controller = require('./controller.js');
const uploadRouter = express.Router();

uploadRouter.post("/upload" , controller.upload, (req, res) => {
  res.send("file uploaded successfully");
});

module.exports = uploadRouter;
