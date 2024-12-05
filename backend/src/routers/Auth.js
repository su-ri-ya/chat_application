const express = require("express");
const Router = express.Router();
const { signUp, login, logOut } = require("../controllers/Auth");

Router.post("/signup", signUp);
Router.post("/login", login);
Router.post("/logout", logOut);
module.exports = Router;
