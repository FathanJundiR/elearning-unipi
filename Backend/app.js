if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const app = express();
// const router = require("./routes");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = app;
