const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require("./config/db")
app.use(bodyParser.json());

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT} `);
} ); 

