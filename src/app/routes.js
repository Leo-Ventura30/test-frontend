//module instances express
const express = require("express");
const routes = express.Router();

//variable for the page controller
const PageController = require("./controllers/PageController");

//route for page render
routes.get("/", PageController.index);
module.exports = routes;
