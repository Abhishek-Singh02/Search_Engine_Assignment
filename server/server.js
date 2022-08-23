const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;

//use middleware
app.use(cors());
app.use(express.json());

//mongodb connection(mock url)
const conn = mongoose.connect(process.env.DB_URL);
conn
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

//Get Ad Data
app.post("/api/search", (req, res) => {
  const brandName = req.body.brand;
  const brandData = brandDB.find({ name: { $regex: brandName } });
  const adData = adsDB.find({ companyid: brandData._id });
  return res.json(adData);
});

//litsen to http port
app.listen(port, () => {
  console.log("Server is running");
});
