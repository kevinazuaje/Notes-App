import React, { Component } from "react";

class Task extends Component {
  staycompleted() {
    return {
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
      fontSize: "25px",
      backgroundColor: "DarkGray",
    };
  }

  render() {
    const { task } = this.props;

    return (
      <p className="grey" style={this.staycompleted()}>
        {task.title}--{task.description}--
        {task.done}-- {task.id}
        <input
          type="checkbox"
          onChange={this.props.checkDone.bind(this, task.id)}
        />
        <button
          className="button"
          onClick={this.props.deleteTask.bind(this, task.id)}
        >
          x
        </button>
      </p>
    );
  }
}

export default Task;
