import React, { Component } from "react";

class Task extends Component {
  staycompleted() {
    return {
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
      fontSize: "25px",
      backgroundColor: this.props.task.done ? "darkgrey" : "green",
    };
  }

  render() {
    const { task } = this.props;

    return (
      <p className="grey" style={this.staycompleted()}>
        <h2>{task.title}</h2>
        <br />
        <p>{task.description}</p>
        <br />
        <p>{task.done}</p>
        <label for="check">done</label>
        <input
          name="check"
          type="checkbox"
          onChange={this.props.checkDone.bind(this, task.id)}
        />
        <button
          className="button"
          onClick={this.props.deleteTask.bind(this, task.id)}
        >
          Delete
        </button>
      </p>
    );
  }
}

export default Task;
