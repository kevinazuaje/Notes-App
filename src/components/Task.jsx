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
        <input type="checkbox" />
        <button className="button">x</button>
      </p>
    );
  }
}

export default Task;
