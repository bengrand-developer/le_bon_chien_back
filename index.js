const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const api = require('./routes');
require ('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/api", api);

app.listen(port, (err) => {
    if (err) {
      throw new Error("There is an error");
    }
    console.log(`Port ${port}`);
  });