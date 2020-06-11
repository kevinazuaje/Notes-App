import React, { Component } from "react";

export default class posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    this.setState({ posts: data });
  }

  render() {
    return (
      <div>
        <h1>posts</h1>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
