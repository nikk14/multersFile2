
const express = require("express");

const app = express();
const cors = require("cors");
const path = require('path');

const port = 4400
const uploadRouter = require("./router")


app.use(cors());
app.use(express.json());
app.use(uploadRouter)

app.get("/", (req, res) => {
  res.json({ status: "healthy and goodss" });
});


//server status 
app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
