import React, { Component } from "react";

class Tasks extends React.Component {
  render() {
    return this.props.tasks.map((e) => (
      <p key={e.id}>
        {e.title}--{e.description}--{e.done}-- {e.priority}
        <input type="checkbox" />
        <button id="button">x</button>
      </p>
    ));
  }
}

export default Tasks;
