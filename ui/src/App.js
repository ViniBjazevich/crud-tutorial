import { AddTaskForm } from "./components/AddTaskForm";
import "./css/app.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <AddTaskForm />
        <Task name={"Dishes"} />
      </div>
    </ThemeProvider>
  );
}

export default App;
