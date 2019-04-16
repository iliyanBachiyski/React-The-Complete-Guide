import { fetchPostsAsync, deletePostAsync } from "../actions";

const mapDispathToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPostsAsync()),
    deletePost: (posts, postId) => dispatch(deletePostAsync(posts, postId))
  };
};

export default mapDispathToProps;
