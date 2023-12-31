import express from "express";
import serverless from "serverless-http";
import { createTask, fetchTasks, updateTask, deleteTask } from "./tasks.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

app.get("/task", async (req, res) => {
  try {
    const tasks = await fetchTasks();

    res.send(tasks.Items);
  } catch (err) {
    res.status(400).send(`Error fetching tasks: ${err}`);
  }
});

app.post("/task", async (req, res) => {
  try {
    const task = req.body;

    const response = await createTask(task);

    res.send(response);
  } catch (err) {
    res.status(400).send(`Error creating task: ${err}`);
  }
});

app.put("/task", async (req, res) => {
  try {
    const task = req.body;

    const response = await updateTask(task);

    res.send(response);
  } catch (err) {
    res.status(400).send(`Error updating task: ${err}`);
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deleteTask(id);

    res.send(response);
  } catch (err) {
    res.status(400).send(`Error deleting task: ${err}`);
  }
});

if (process.env.DEVELOPMENT) {
  const port = 3001;

  app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at localhost:${port}`);
  });
}

export const handler = serverless(app);
