import express from "express";
import {
  createTask,
  fetchTasks,
  updateTask,
  deleteTask,
} from "./db/connection.js";

const app = express();
const port = 3001;

app.get("/task", (req, res) => {
  try {
    const tasks = fetchTasks();

    res.send(tasks);
  } catch (err) {
    res.status(500).send("Error fetching tasks");
  }
});

app.post("/task", (req, res) => {
  try {
    const task = req.body;

    createTask(task);

    res.send("Successfully created task: ", task);
  } catch (err) {
    res.status(500).send("Error creating task: ", task);
  }
});

app.put("/task", (req, res) => {
  try {
    const task = req.body;

    updateTask(task);

    res.send("Successfully created task: ", task);
  } catch (err) {
    res.status(500).send("Error creating task: ", task);
  }
});

app.delete("/task", (req, res) => {
  try {
    const task = req.body;

    deleteTask(task);

    res.send("Successfully created task: ", task);
  } catch (err) {
    res.status(500).send("Error creating task: ", task);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
