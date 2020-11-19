import axios from "axios";
import * as actions from "./types";

//RESET_USER
export const resetUser = () => (dispatch) => {
  dispatch({
    type: actions.RESET_USER,
    payload: {},
  });
};

//GET_USERs
export const getUsers = () => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/user/`)
    .then((res) => {
      dispatch({
        type: actions.GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//GET_USER
export const getUser = (id) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/user/${id}/`)
    .then((res) => {
      dispatch({
        type: actions.GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD_USER
export const addUser = (user) => (dispatch) => {
  axios
    .post(`http://127.0.0.1:8000/api/user/`, user)
    .then((res) => {
      dispatch({
        type: actions.ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// UPDATE_USER
export const updateUser = (user, id) => (dispatch) => {
  const { username, email, is_superuser } = user;
  axios
    .patch(`http://127.0.0.1:8000/api/user/${id}/`, {
      username,
      email,
      is_superuser,
    })
    .then((res) => {
      dispatch({
        type: actions.UPDATE_USER,
        payload: res.data,
        index: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE_USER
export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/user/${id}/`)
    .then((res) => {
      dispatch({
        type: actions.DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
