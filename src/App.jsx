import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
import Taskforms from "./components/Taskforms.jsx";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTasks = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tasks.length,
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
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
