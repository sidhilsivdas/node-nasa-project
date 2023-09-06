const express = require("express");
const planetRouter = express.Router();
const planetController = require("./planets.controller")
planetRouter.get("/planets", planetController.getPlanets);

module.exports = planetRouter;