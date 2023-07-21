import express from "express";
import { db } from "./db/index.js";

const app = express();
app.use(express.json());

export const handleGetTasks = (req, res) => {
  db.all("SELECT * FROM task", (err, data) => {
    res.json(data);
  });
};

export const handleCreateTasks = (req, res) => {
  const { body } = req;
  if (!body.name) {
    return res.status(400).json({ message: 'The field "title" is required' });
  }
  if (!body.date) {
    return res.status(400).json({ message: 'The field "date" is required' });
  }
  db.run("INSERT INTO task (`name`, `date`) VALUES (?, ?)", [
    body.name,
    body.date,
  ]);

  res.json("Task has been created successfully");
};

export const handleUpdateTasks = (req, res) => {
  const bookId = req.params.id;
  db.run("UPDATE task SET name = ?, date = ? WHERE id=?", [
    req.body.name,
    req.body.date,
    bookId,
  ]);
  res.json("Task has been updated successfully");
};

export const handleDeleteTasks = (req, res) => {
  const bookId = req.params.id;
  db.run("DELETE FROM task WHERE id = ?", [bookId]);
  res.json("Task has been deleted successfully");
};
