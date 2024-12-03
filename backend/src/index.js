const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hi hello world");
});
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("server is connected", process.env.PORT);
});
