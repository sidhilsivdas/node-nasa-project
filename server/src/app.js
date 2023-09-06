const express = require("express");
const cors = require("cors");
const planetRouter = require("./routes/planets/planets.routes")
const app = express();
app.use(cors());
app.use(express.json());
app.use(planetRouter);
module.exports = app;