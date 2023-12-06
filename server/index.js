require("dotenv").config();
const express = require("express");
const { env_config } = require("./config/config.env");
const { connectToDatabase } = require("./database");
const userRouter = require("./routers/router.user");
const tweetRouter = require("./routers/router.tweet");
const cors = require("cors");

const app = express();
const PORT = env_config.PORT || 8080;

(async () => await connectToDatabase())();

app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tweet", tweetRouter);

app.listen(PORT, () =>
  console.log(`Server is running at port http://localhost:${PORT}`)
);
