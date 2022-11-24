import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/users", (req, res) => {
  res.json({
    data: "phuc phuc",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
