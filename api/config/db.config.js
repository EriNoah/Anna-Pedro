const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/anna-pedro";

mongoose
  .connect(MONGODB_URI)
  .then(console.info(`Connected to ${MONGODB_URI}`))
  .catch((error) => console.error(`Error connecting to ${MONGODB_URI}`, error));
