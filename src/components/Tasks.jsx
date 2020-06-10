import React, { Component } from "react";
import Task from "./Task";
import proptypes from "prop-types";

class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

Tasks.proptype = {
  tasks: proptypes.array.isRequired,
};

export default Tasks;
