require("dotenv").config();
require("dotenv").config();

require("./config/db").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./src/routes/regester");
const slotRoutes = require("./src/routes/slot");

// const cookieParser = require("cookie-parser");

const app = express();
const path = require("path");
app.use(express.static("build "));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/register", studentRoutes);
app.use("/slot", slotRoutes);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build ", "index.html"));
});
// app.use(cookieParser());

module.exports = app;
