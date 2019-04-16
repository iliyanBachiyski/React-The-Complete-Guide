import { fetchPostsAsync, deletePostAsync } from "../actions";

const mapDispathToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPostsAsync()),
    deletePost: postId => dispatch(deletePostAsync(postId))
  };
};

export default mapDispathToProps;
