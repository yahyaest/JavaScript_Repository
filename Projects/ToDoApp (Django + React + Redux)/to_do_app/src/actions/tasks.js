import axios from "axios";
import {
  GET_TASKS,
  GET_TASK,
  RESET_TASK,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "./../actions/types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

//GET_TASKS
export const getTasks = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/task/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//GET_TASK
export const getTask = (id) => (dispatch, getState) => {
  axios
    .get(`http://127.0.0.1:8000/api/task/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TASK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//RESET_TASK
export const resetTask = (id) => (dispatch) => {
  dispatch({
    type: RESET_TASK,
    payload: {},
  });
};

// ADD_TASK
export const addTasks = (task) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/task/", task, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addTask: "Task Added" }));
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// UPDATE_TASK
export const updateTasks = (task, id) => (dispatch, getState) => {
  axios
    .put(`http://127.0.0.1:8000/api/task/${id}/`, task, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateTask: "Task Updated" }));
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
        index: id,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// DELETE_TASK
export const deleteTasks = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/task/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteTask: "Task Deleted" }));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
