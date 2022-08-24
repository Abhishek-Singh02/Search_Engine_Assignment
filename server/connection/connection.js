const mongoose = require("mongoose");

const con = mongoose
  .connect(process.env.DATABASE_URL)
  .then((db) => {
    console.log("Database Connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

module.exports = con;
