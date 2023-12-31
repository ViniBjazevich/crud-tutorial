import React, { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./constants";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {tasks.map((task) => (
        <Task fetchTasks={fetchTasks} task={task} key={task.id} />
      ))}
    </ThemeProvider>
  );
}

export default App;
