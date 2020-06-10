import React, { Component } from "react";

class Taskforms extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Task Name"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          placeholder="Write a description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
export default Taskforms;
