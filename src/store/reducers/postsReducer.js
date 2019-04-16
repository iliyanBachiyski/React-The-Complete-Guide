import {
  GET_POSTS_ACTION,
  DELETE_POSTS_ACTION,
  FETCHING_ERROR_ACTION
} from "../actions/actionConst";

const initialState = {
  posts: [],
  errorMessage: null
};
const postsReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case GET_POSTS_ACTION:
      newState = {
        posts: action.payload.posts
      };
      break;
    case DELETE_POSTS_ACTION:
      let updatedPosts = state.posts;
      updatedPosts = updatedPosts.filter(post => {
        return post.id !== action.payload.postId;
      });
      newState = {
        posts: updatedPosts
      };
      break;
    case FETCHING_ERROR_ACTION:
      newState = {
        posts: [...state.posts],
        errorMessage: action.payload.errorMessage
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default postsReducer;
