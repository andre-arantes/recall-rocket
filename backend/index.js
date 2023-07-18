import express from "express";
import { db } from "./src/db/index.js";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.listen(8800, () => {
  const q = "SELECT * FROM task";
  const test = db.get(q, (res) => console.log(res));
  console.log(test);
});
