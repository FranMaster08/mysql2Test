const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const middle = require("./middleware");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(route);
app.use(middle.error);

module.exports = app;
