import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
import Taskforms from "./components/Taskforms.jsx";

class App extends Component {
  state = {
    tasks: tasks,
  };
  render() {
    return (
      <div>
        <Taskforms />
        {<Tasks tasks={this.state.tasks} />}
      </div>
    );
  }
}

export default App;
