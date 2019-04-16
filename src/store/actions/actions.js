import axios from "axios";
import * as actionTypes from "./actionConst";

const tooglePersonCreator = () => {
  return { type: actionTypes.TOOGLE_PERSONS_ACTION };
};

export const tooglePersons = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(tooglePersonCreator());
    }, 2000);
  };
};

export const increaseAge = personName => {
  return { type: actionTypes.INCREASE_AGE_ACTION, payload: { personName } };
};

export const changePersonName = (event, oldPersonName) => {
  return {
    type: actionTypes.CHANGE_PERSON_NAME_ACTION,
    payload: { event, oldPersonName }
  };
};

export const deletePersonName = personIdx => {
  return { type: actionTypes.DELETE_PERSON_ACTION, payload: { personIdx } };
};

export const increaseRAM = () => {
  return { type: actionTypes.INCREASE_RAM_ACTION };
};

export const resetRAM = () => {
  return { type: actionTypes.RESET_RAM_ACTION };
};

export const simulateError = () => {
  return { type: actionTypes.SIMULATE_ERROR_ACTION };
};

export const fetchPostsAsync = () => {
  return dispatch => {
    axios
      .get("/posts")
      .then(response => response.data)
      .then(data => {
        const posts = data;
        posts.forEach((post, idx) => {
          axios.get(`/users/${post.userId}`).then(response => {
            post.ownerName = response.data.name;
            if (idx === posts.length - 1) {
              dispatch(fetchPosts(posts));
            }
          });
        });
      })
      .catch(err => {
        const errorMessage = "Unable to load posts!!";
        dispatch(fetchingError(errorMessage));
      });
  };
};

const fetchPosts = data => {
  return {
    type: actionTypes.GET_POSTS_ACTION,
    payload: {
      posts: data
    }
  };
};

export const deletePostAsync = (posts, postId) => {
  return dispatch => {
    let updatedPosts = posts;
    updatedPosts = updatedPosts.filter(post => {
      return post.id !== postId;
    });
    axios
      .delete(`/posts/${postId}`)
      .then(response => {
        dispatch(deletePost(updatedPosts));
        console.log(response);
      })
      .catch(err => {
        const errorMessage = "Unable to load posts!!";
        dispatch(fetchingError(errorMessage));
      });
  };
};

const deletePost = updatedPosts => {
  return {
    type: actionTypes.DELETE_POSTS_ACTION,
    payload: {
      posts: updatedPosts
    }
  };
};

const fetchingError = errMsg => {
  return {
    type: actionTypes.FETCHING_ERROR_ACTION,
    payload: {
      errorMessage: errMsg
    }
  };
};
