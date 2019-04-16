import React, { Component } from "react";
import { Route } from "react-router-dom";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import Spinner from "../Spinner/Spinner";
import asyncFullPost from "../hoc/asyncFullPost";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/actions/postActions/mapDispatchToProps";

const AsyncFullPost = asyncFullPost(() => {
  return import("./FullPost/FullPost");
});

class Posts extends Component {
  state = {
    posts: [],
    errorMessage: null
  };

  componentDidMount() {
    this.props.getPosts();
  }

  deletePost = postId => {
    this.props.deletePost(this.props.posts, postId);
  };

  viewPostHandler = postId => {
    this.props.history.push(`/posts/${postId}`);
  };
  render() {
    let posts = this.props.posts.map(post => (
      <Post
        key={post.id}
        post={post}
        deletePost={this.deletePost}
        viewPost={this.viewPostHandler}
      />
    ));
    if (this.props.posts.length === 0) {
      posts = <Spinner />;
    }
    if (this.props.errorMessage) {
      posts = <div style={{ color: "red" }}>{this.props.errorMessage}</div>;
    }
    return (
      <div className="card">
        <Route
          path={`${this.props.match.url}/:id`}
          render={props => <AsyncFullPost {...props} />}
        />
        <AddPost />
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postRed.posts,
    errorMessage: state.postRed.errorMessage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
