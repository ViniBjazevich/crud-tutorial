import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Task = ({ name }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <div className="task">
        <Typography variant="h4">{name}</Typography>
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
    </div>
  );
};
