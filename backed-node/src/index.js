/** @format */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const caloriesRoutes = require("./routes/caloriesRoutes.js");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", caloriesRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
