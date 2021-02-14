const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json({ extended: false }));

//MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Blog Post API");
});

//Routes
app.use("/api/posts", require("./routes/posts"));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
