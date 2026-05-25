const express = require("express");
const games = express.Router();
const isLoggedIn = require("../Middleware/auth");

const path = require("path");

const gamesController = require("../controller/gamesController");

games.get("/:gameId", isLoggedIn, gamesController.games)

module.exports = games;