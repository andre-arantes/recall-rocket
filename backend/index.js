import express from "express";
import cors from "cors";
import { db } from "./src/db/index.js";
import router from "./src/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.use("/api", router);

// app.post("/task", (req, res) => {
//   console.log(req.body);
//   res.json({
//     statusCode: 200,
//   });
// });

app.listen(8800, () => {
  const q = "SELECT * FROM task";
  const test = db.get(q, (res) => console.log(res));
  console.log(test);
});
