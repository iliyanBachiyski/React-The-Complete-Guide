import { fetchPostsAsync, deletePostAsync } from "../actionConst";

const mapDispathToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPostsAsync()),
    deletePost: (posts, postId) => dispatch(deletePostAsync(posts, postId))
  };
};

export default mapDispathToProps;
