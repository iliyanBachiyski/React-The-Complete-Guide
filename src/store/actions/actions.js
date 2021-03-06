import axios from "axios";
import * as actionTypes from "./actionConst";
import { SIGN_UP_URL, SIGN_IN_URL, ORDERS_URL } from "../../apiConfig";

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

export const deletePostAsync = postId => {
  return dispatch => {
    axios
      .delete(`/posts/${postId}`)
      .then(response => {
        dispatch(deletePost(postId));
        console.log(response);
      })
      .catch(err => {
        const errorMessage = "Unable to load posts!!";
        dispatch(fetchingError(errorMessage));
      });
  };
};

const deletePost = postId => {
  return {
    type: actionTypes.DELETE_POSTS_ACTION,
    payload: {
      postId
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

export const submitAuthRequest = (data, isSignUp) => {
  return dispatch => {
    dispatch(submitAuthStart());
    const authData = {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    };
    const url = isSignUp ? SIGN_UP_URL : SIGN_IN_URL;
    axios.post(url, authData).then(
      response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("localId", response.data.localId);
        dispatch(submitAuthSuccess(response.data));
        dispatch(startTokenExpiratinTimer(response.data.expiresIn));
      },
      err => {
        dispatch(submitAuthError(err));
      }
    );
  };
};

const submitAuthStart = () => {
  return {
    type: actionTypes.AUTH_START_ACTION
  };
};

const submitAuthError = err => {
  return {
    type: actionTypes.AUTH_ERROR_ACTION,
    payload: {
      response: {
        error: err
      }
    }
  };
};

const submitAuthSuccess = response => {
  return {
    type: actionTypes.AUTH_SUCCESS_ACTION,
    payload: {
      response
    }
  };
};

export const logOutAction = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("localId");
  return {
    type: actionTypes.AUTH_TOKEN_EXPIRED_ACTION
  };
};

const startTokenExpiratinTimer = expiresIn => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOutAction());
    }, expiresIn * 1000);
  };
};

export const fetchOrdersAsync = (token, userId) => {
  return dispatch => {
    const url = `${ORDERS_URL}${token}&orderBy="userId"&equalTo="${userId}"`;
    axios.get(url).then(
      response => {
        dispatch(submitOrdersSuccess(response.data));
      },
      err => {
        dispatch(submitOrdersFailed(err));
      }
    );
  };
};

const submitOrdersSuccess = orders => {
  return {
    type: actionTypes.GET_ORDERS_ACTION,
    payload: {
      orders
    }
  };
};

const submitOrdersFailed = err => {
  return {
    type: actionTypes.GET_ORDERS_FAILED_ACTION,
    payload: {
      error: err
    }
  };
};

export const autoSignIn = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logOutAction());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        const localId = localStorage.getItem("localId");
        const data = { idToken: token, localId };
        const newExpirationTime =
          (expirationDate.getTime() - new Date().getTime()) / 1000;
        dispatch(submitAuthSuccess(data));
        dispatch(startTokenExpiratinTimer(newExpirationTime));
      } else {
        dispatch(logOutAction());
      }
    }
  };
};
