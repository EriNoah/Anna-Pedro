require("dotenv").config();

const express = require("express");
const logger = require("morgan");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./config/db.config");

const app = express();
app.use(bodyParser.json());

const cors = require("./config/cors.config");
app.use(cors)

app.use(logger("dev"));


app.use("/api/v1", require("./config/routes.config"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`App running on port ${PORT}!`);
});
