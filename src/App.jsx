import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
import Taskforms from "./components/Taskforms.jsx";
import Posts from "./components/posts";
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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTask = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return tasks;
    });
    this.setState({ task: newTask });
  };

  render() {
    return (
      <div>
        <Taskforms addTasks={this.addTasks} />
        {
          <Tasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            checkDone={this.checkDone}
          />
        }
        <Posts />
      </div>
    );
  }
}

export default App;
