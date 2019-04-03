import React, { Component } from "react";
import { Route } from "react-router-dom";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import FullPost from "./FullPost/FullPost";
import Spinner from "../Spinner/Spinner";
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

  viewPostHandler = postId => {
    this.props.history.push(`/posts/${postId}`);
  };
  render() {
    let posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        post={post}
        deletePost={this.deletePost}
        viewPost={this.viewPostHandler}
      />
    ));
    if (this.state.posts.length === 0) {
      posts = <Spinner />;
    }
    if (this.state.errorMessage) {
      posts = <div style={{ color: "red" }}>{this.state.errorMessage}</div>;
    }
    return (
      <div className="card">
        <Route
          path={`${this.props.match.url}/:id`}
          render={props => <FullPost {...props} />}
        />
        <AddPost />
        {posts}
      </div>
    );
  }
}

export default Posts;
