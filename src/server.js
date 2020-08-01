//instance of the path and expression module
const express = require("express");
const app = express();
const path = require("path");

//default path for views and template engine
app.set("views", path.resolve(__dirname, "app", "views"));
app.set("view engine", "ejs");
//default path for public files and static route file
app.use(express.static(path.resolve(__dirname, "public")));
app.use(require("./app/routes"));

module.exports = app;
