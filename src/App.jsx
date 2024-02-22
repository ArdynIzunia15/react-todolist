import "bootstrap/dist/css/bootstrap.css";
import "@material/web/textfield/outlined-text-field";
import "@material/web/button/filled-button";
import TaskCard from "./components/TaskCard";
import { useState } from "react";
import "./app.css";
import LottieAnimation from "./components/LottieAnimation";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [tempTask, setTempTask] = useState("");

  function handleClickBtnAdd(newTask) {
    // Ambil dulu arraynya
    const tempArrTask = tasks;

    // push item baru
    tempArrTask.push(newTask);

    // Update state
    setTasks(tempArrTask);

    // Reset Input
    document.getElementById("inputTask").value = "";
    setTempTask("");
    console.log(tasks);
  }

  const handleChangeInputTask = (event) => {
    setTempTask(event.target.value);
  };

  return (
    <div className="container">
      <LottieAnimation src={"animation-hamster.json"} />
      <h1 className="text-center mt-5">To Do List</h1>
      {/* Input Field */}
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-8 d-grid">
          <input
            className="form-control"
            placeholder="Input Task Name..."
            type="text"
            label={"Task Title"}
            onChange={handleChangeInputTask}
            id="inputTask"
          />
          <button
            className="btn btn-primary mt-2"
            onClick={() => handleClickBtnAdd({ title: tempTask })}>
            Add
          </button>
        </div>
      </div>
      {/* Recycler view */}
      <div className="row align-items-center justify-content-center mt-4 recyclerview">
        <div className="col-12 d-grid ">
          {tasks.map((task, i) => (
            <TaskCard title={task.title} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
