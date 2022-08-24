const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

//use middleware
app.use(cors());
app.use(express.json());

//mongodb connection(mock url)
const conn = require("./connection/connection");
conn
  .then((db) => {
    if (!db) return process.exit(1);

    //litsen to http port
    app.listen(port, () => {
      console.log("Server is running");
    });

    app.on("error", (err) => {
      console.log(`Failed to connect to the server ${err}`);
    });
  })
  .catch("error", (err) => console.log(`Connection Failed ! ...${err}`));

//using routes
app.use(require("./routes/routes"));
