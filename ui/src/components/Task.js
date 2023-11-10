import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import classnames from "classnames";

export const Task = ({ name }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="task">
      <div
        className={classnames("flex", {
          done: isComplete,
        })}
      >
        <Checkbox
          checked={isComplete}
          onChange={() => setIsComplete((prev) => !prev)}
        />
        <Typography variant="h4">{name}</Typography>
      </div>
      <div className="taskButtons">
        <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
          <EditIcon />
        </Button>
        <Button variant="contained" color="error">
          <DeleteIcon />
        </Button>
      </div>
      <Dialog open={isDialogOpen}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className="dialog">
          <TextField
            size="small"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Button variant="contained" onClick={() => setIsDialogOpen(false)}>
            <CheckIcon />
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
