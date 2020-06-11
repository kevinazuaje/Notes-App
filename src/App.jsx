import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks.jsx";
import Taskforms from "./components/Taskforms.jsx";

import posts from "./components/posts";
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
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>

          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Taskforms addTasks={this.addTasks} />

                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={posts}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
