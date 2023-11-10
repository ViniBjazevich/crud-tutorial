import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddTaskForm = () => {
  return (
    <div className="addTaskForm">
      <TextField
        size="small"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button variant="outlined">
        <AddIcon />
      </Button>
    </div>
  );
};
