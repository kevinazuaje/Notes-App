import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
import Taskforms from "./components/Taskforms.jsx";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTasks = () => {
    console.log("agregando tarea");
  };

  render() {
    return (
      <div>
        <Taskforms addTasks={this.addTasks} />
        {<Tasks tasks={this.state.tasks} />}
      </div>
    );
  }
}

export default App;
