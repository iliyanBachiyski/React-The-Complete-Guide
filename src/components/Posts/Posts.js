import React, { Component } from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
    errorMessage: null
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => response.data)
      .then(data => {
        const posts = data;
        posts.forEach((post, idx) => {
          axios.get(`/users/${post.userId}`).then(response => {
            post.ownerName = response.data.name;
            if (idx === posts.length - 1) {
              this.setState({ posts });
            }
          });
        });
      })
      .catch(err => {
        this.setState({ errorMessage: "Unable to load posts!!" });
      });
  }

  deletePost = postId => {
    let updatedPosts = this.state.posts;
    updatedPosts = updatedPosts.filter(post => {
      return post.id !== postId;
    });
    axios.delete(`/posts/${postId}`).then(response => {
      this.setState({ posts: updatedPosts });
      console.log(response);
    });
  };
  render() {
    let posts = this.state.posts.map(post => (
      <Post key={post.id} post={post} deletePost={this.deletePost} />
    ));
    if (this.state.errorMessage) {
      posts = <div style={{ color: "red" }}>{this.state.errorMessage}</div>;
    }
    return (
      <div className="card">
        <AddPost />
        {posts}
      </div>
    );
  }
}

export default Posts;
