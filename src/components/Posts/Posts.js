import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const posts = props => (
  <div className="card">
    <AddPost />
    <Post />
  </div>
);

export default posts;
