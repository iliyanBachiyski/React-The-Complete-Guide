import React, { Component } from "react";
import PostInput from "./PostInput/PostInput";
import axios from "../../../axiosInstance";

class AddPost extends Component {
  state = {
    postTitle: "",
    postContent: "",
    postAuthor: ""
  };

  postDataHandler = () => {
    const post = {
      title: this.state.postTitle,
      body: this.state.postContent,
      author: this.state.postAuthor
    };
    axios.post("/posts", post).then(response => {
      console.log(response);
    });
  };
  render() {
    return (
      <div className="card">
        <h2>Add a Post</h2>
        <PostInput
          title="Title"
          textChangeHandler={e => {
            this.setState({ postTitle: e.target.value });
          }}
        />
        <PostInput
          title="Content"
          textChangeHandler={e => {
            this.setState({ postContent: e.target.value });
          }}
        />
        <PostInput
          title="Author"
          textChangeHandler={e => {
            this.setState({ postAuthor: e.target.value });
          }}
        />
        <button
          style={{ backgroundColor: "green" }}
          onClick={this.postDataHandler}
        >
          Add Post
        </button>
      </div>
    );
  }
}

export default AddPost;
