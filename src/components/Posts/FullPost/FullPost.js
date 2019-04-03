import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.module.css";
class FullPost extends Component {
  state = {
    post: null,
    err: null
  };
  componentDidMount() {
    axios
      .get(`/posts/${this.props.match.params.id}`)
      .then(response => {
        const post = response.data;
        axios.get(`/users/${post.userId}`).then(userInfo => {
          post.ownerName = userInfo.data.name;
          this.setState({ post });
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    let post = <div className={classes.Loader}>Loading...</div>;
    if (this.state.post) {
      post = (
        <div className="card">
          <h1>{this.state.post.title}</h1>
          <h3>Author: {this.state.post.ownerName}</h3>
          <p>{this.state.post.body}</p>
        </div>
      );
    }
    return <React.Fragment>{post}</React.Fragment>;
  }
}

export default FullPost;
