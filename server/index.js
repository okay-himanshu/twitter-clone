require("dotenv").config();
const express = require("express");
const { env_config } = require("./config/config.env");

const app = express();
const PORT = env_config.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () =>
  console.log(`Server is running at port http://localhost:${PORT}`)
);
