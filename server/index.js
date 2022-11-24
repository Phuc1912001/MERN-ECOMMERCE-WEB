import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB ERROR => ", err));

app.get("/users", (req, res) => {
  res.json({
    data: "Ryan Zen David Kevin Sara Jane",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
