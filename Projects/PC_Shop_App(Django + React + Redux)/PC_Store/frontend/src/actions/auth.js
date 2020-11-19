import axios from "axios";
import { returnErrors } from "./messages";
import {
  GET_USER,
  USER_LOADING,
  USER_LOADED,
  LOGGED_USER,
  PROFILE_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ADD_REMOVE_TO_PROFILE,
  ADD_REMOVE_TO_CHART,
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: USER_LOADING,
  });

  axios
    .get("http://127.0.0.1:8000/api/auth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });

  setTimeout(() => {
    const userId = getState().auth.user?.id;
    axios
      .get("http://127.0.0.1:8000/api/profile/", tokenConfig(getState))
      .then((res) => {
        const userProfile = res.data.filter((user) => user.user === userId);
        //console.log(userProfile[0].data);
        dispatch({
          type: PROFILE_LOADED,
          payload: userProfile[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://127.0.0.1:8000/api/user/${userId}/`)
      .then((res) => {
        dispatch({
          type: LOGGED_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, 500);
};

// LOGIN USER
export const login = (username, password) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://127.0.0.1:8000/api/auth/login", body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });

  setTimeout(() => {
    const userId = getState().auth.user?.id;
    axios
      .get("http://127.0.0.1:8000/api/profile/", tokenConfig(getState))
      .then((res) => {
        const userProfile = res.data.filter((user) => user.user === userId);
        dispatch({
          type: PROFILE_LOADED,
          payload: userProfile[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://127.0.0.1:8000/api/user/${userId}/`)
      .then((res) => {
        dispatch({
          type: LOGGED_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, 1000);
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/logout", null, tokenConfig(getState)) //body is null
    .then((res) => dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password, email });

  axios
    .post("http://127.0.0.1:8000/api/auth/register", body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

// ADD/REMOVE TO PROFILE
export const addRemoveToProfile = (userProfile) => (dispatch, getState) => {
  const userId = getState().auth.user?.id;
  axios
    .put(
      `http://127.0.0.1:8000/api/profile/${userId}/`,
      userProfile,
      tokenConfig(getState)
    )
    .then((res) => dispatch({ type: ADD_REMOVE_TO_PROFILE, payload: res.data }))
    .catch((err) => {
      console.log(err);
      //dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function

export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
