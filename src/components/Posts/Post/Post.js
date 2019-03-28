import React from "react";

const post = props => {
  const { post } = props;

  return (
    <div className="card">
      {/*       <h1>{post.title}</h1>
      <p>{post.body}</p> */}
      <h1>Title</h1>
      <h3>Author</h3>
      <p>Body</p>
      <button>Delete</button>
    </div>
  );
};

export default post;
