import express from "express";
import cors from "cors";
import router from "./src/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.use("/api", router);

app.listen(8800, () => {
  console.log("Server is now listening on port 8800");
});
