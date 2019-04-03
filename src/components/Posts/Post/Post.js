import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Post.module.css";

const post = props => {
  const { post } = props;
  return (
    <div className={["card", classes.Post].join(" ")}>
      <h1>{post.title}</h1>
      <h3>Author: {post.ownerName}</h3>
      <button onClick={() => props.deletePost(post.id)}>Delete</button>
      <button onClick={() => props.viewPost(post.id)}>View</button>
    </div>
  );
};

export default withRouter(React.memo(post));
