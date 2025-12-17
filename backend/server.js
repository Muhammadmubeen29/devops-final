const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/devopsdb");

app.get("/api", (req, res) => {
  res.json({ success: true, message: "Backend Working" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
