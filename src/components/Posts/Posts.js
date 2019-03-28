import React, { Component } from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
    users: {}
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.data)
      .then(data => {
        const posts = data;
        posts.forEach((post, idx) => {
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response => {
              post.ownerName = response.data.name;
              if (idx === posts.length - 1) {
                this.setState({ posts });
              }
            });
        });
      });
  }
  render() {
    return (
      <div className="card">
        <AddPost />
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            post={post}
            user={this.state.users[post.userId]}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
