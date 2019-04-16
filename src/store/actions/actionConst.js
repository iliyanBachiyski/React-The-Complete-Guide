import axios from "axios";

export const TOOGLE_PERSONS_ACTION = "TOOGLE_PERSONS";
export const INCREASE_AGE_ACTION = "INCREASE_AGE";
export const CHANGE_PERSON_NAME_ACTION = "CHANGE_PERSON_NAME";
export const DELETE_PERSON_ACTION = "DELETE_PERSON";

export const INCREASE_RAM_ACTION = "INCREASE_RAM";
export const RESET_RAM_ACTION = "RESET_RAM";
export const SIMULATE_ERROR_ACTION = "SIMULATE_ERROR";

export const GET_POSTS_ACTION = "GET_POSTS";
export const DELETE_POSTS_ACTION = "DELETE_POSTS";
export const FETCHING_ERROR_ACTION = "FETCHING_ERROR";

const tooglePersonCreator = () => {
  return { type: TOOGLE_PERSONS_ACTION };
};

export const tooglePersons = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(tooglePersonCreator());
    }, 2000);
  };
};

export const increaseAge = personName => {
  return { type: INCREASE_AGE_ACTION, payload: { personName } };
};

export const changePersonName = (event, oldPersonName) => {
  return { type: CHANGE_PERSON_NAME_ACTION, payload: { event, oldPersonName } };
};

export const deletePersonName = personIdx => {
  return { type: DELETE_PERSON_ACTION, payload: { personIdx } };
};

export const increaseRAM = () => {
  return { type: INCREASE_RAM_ACTION };
};

export const resetRAM = () => {
  return { type: RESET_RAM_ACTION };
};

export const simulateError = () => {
  return { type: SIMULATE_ERROR_ACTION };
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
    type: GET_POSTS_ACTION,
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
    type: DELETE_POSTS_ACTION,
    payload: {
      posts: updatedPosts
    }
  };
};

const fetchingError = errMsg => {
  return {
    type: FETCHING_ERROR_ACTION,
    payload: {
      errorMessage: errMsg
    }
  };
};
