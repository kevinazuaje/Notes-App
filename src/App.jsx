import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks,
  };
  render() {
    return (
      <div>
        {this.state.tasks.map((e) => (
          <p key={e.id}>
            {e.title} - {e.description} - {e.done} - {e.priority} <Tasks />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
