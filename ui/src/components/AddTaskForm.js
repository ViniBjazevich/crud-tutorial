import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { API_URL } from "../constants.js";

export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");

  const handleCreateNewTask = async () => {
    try {
      await axios.post(API_URL, {
        name: newTask,
        completed: false,
      });

      setNewTask("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateNewTask = (e) => setNewTask(e.target.value);

  return (
    <div className="addTaskForm">
      <TextField
        size="small"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleUpdateNewTask}
        value={newTask}
      />
      <Button variant="outlined" onClick={handleCreateNewTask}>
        <AddIcon />
      </Button>
    </div>
  );
};
