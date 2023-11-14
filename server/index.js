require("dotenv").config();
const express = require("express");
const { env_config } = require("./config/config.env");
const { connectToDatabase } = require("./database");
const router = require("./routers/router.user");

const app = express();
const PORT = env_config.PORT || 8080;

(async () => await connectToDatabase())();

app.use(express.json());
app.use("/api/v1/user", router);

app.listen(PORT, () =>
  console.log(`Server is running at port http://localhost:${PORT}`)
);
