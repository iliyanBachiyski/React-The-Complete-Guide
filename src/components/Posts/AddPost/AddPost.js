import React from "react";
import PostInput from "./PostInput/PostInput";

const addPost = props => (
  <div className="card">
    <h2>Add a Post</h2>
    <PostInput
      title="Title"
      textChangeHandler={e => {
        console.log(e.target.value);
      }}
    />
    <PostInput
      title="Content"
      textChangeHandler={e => {
        console.log(e.target.value);
      }}
    />
    <PostInput
      title="Author"
      textChangeHandler={e => {
        console.log(e.target.value);
      }}
    />
    <button
      onClick={() => {
        console.log("Post Adding...");
      }}
    >
      Add Post
    </button>
  </div>
);

export default addPost;
