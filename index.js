require("dotenv").config();
const express = require("express");


const app = express();
const cors = require("cors");
const uploadRouter = require("./router")
const port = process.env.port || 4300;
// const { upload } = require("./controller");

app.use(cors());
app.use(express.json());
app.use(uploadRouter)

app.get("/", (req, res) => {
  res.json({ status: "healthy and good" });
});


app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
