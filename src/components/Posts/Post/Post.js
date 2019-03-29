import React from "react";
import classes from "./Post.module.css";
const post = props => {
  const { post } = props;
  return (
    <div className={["card", classes.Post].join(" ")}>
      <h1>{post.title}</h1>
      <h3>AuthorID: {post.ownerName}</h3>
      <p>{post.body}</p>
      <button onClick={() => props.deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default React.memo(post);
