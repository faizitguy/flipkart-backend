const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
env.config();
const app = express();
app.use(express.json());

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => {
    console.log("The database is connected");
  }
);

app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
