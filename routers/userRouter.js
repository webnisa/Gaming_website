const express = require("express");
const user = express.Router();

const path = require("path");

const userController = require("../controller/userConntoller");

user.get("/contactus", userController.contact_us);
user.get("/signin", userController.sign_inGet);
user.post("/signin", userController.sign_in);
user.get("/login",userController.loginGet)
user.post("/login", userController.login);
user.get("/logout", userController.logout);
module.exports = user;