const mongoose = require("mongoose");
require("dotenv").config();

function DbStart() {
  const db = process.env.DB;
  try {
    mongoose
      .connect(db)
      .then(() => console.log(`Connected to MongoDb at ${db}`));
  } catch (e) {
    console.log(e);
  }
}

module.exports = DbStart;
