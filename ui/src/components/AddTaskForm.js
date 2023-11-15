import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { API_URL } from "../constants.js";

export const AddTaskForm = ({ fetchTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleCreateNewTask = async () => {
    try {
      await axios.post(API_URL, {
        name: newTask,
        completed: false,
      });

      await fetchTasks();

      setNewTask("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Typography
        align={"center"}
        variant="h2"
        paddingTop={2}
        paddingBottom={2}
      >
        My Task List
      </Typography>
      <div className="addTaskForm">
        <TextField
          size="small"
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <Button variant="outlined" onClick={handleCreateNewTask}>
          <AddIcon />
        </Button>
      </div>
    </>
  );
};
