const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const AuthRouter = require("./routers/Auth");

const app = express();
app.use(express.json());

app.use("/hello", (req, res) => {
  res.send("hi hello world");
});
app.use("/", AuthRouter);
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("server is connected", process.env.PORT);
});
