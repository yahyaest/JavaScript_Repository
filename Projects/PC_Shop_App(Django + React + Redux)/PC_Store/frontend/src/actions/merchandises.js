import axios from "axios";
import {
  //GET_MERCHANDISES,
  // GET_MERCHANDISE,
  RESET_COMPONENT,
  CURRENT_COMPONENT,
  GET_COMPONENTS,
  GET_COMPONENT,
  ADD_COMPONENT,
  UPDATE_COMPONENT,
  DELETE_COMPONENT,
} from "./types";

//RESET_COMPONENT
export const resetComponent = () => (dispatch) => {
  dispatch({
    type: RESET_COMPONENT,
    payload: { CPU: {}, GPU: {} },
  });
};

//CURRENT_COMPONENT
export const currentComponent = (componentType) => (dispatch) => {
  dispatch({
    type: CURRENT_COMPONENT,
    payload: componentType,
  });
};

//GET_COMPONENTs
export const getComponents = (componentType) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/${componentType}/`)
    .then((res) => {
      dispatch({
        type: GET_COMPONENTS,
        payload: res.data,
        currentComponent: componentType,
      });
    })
    .catch((err) => console.log(err));
};

//GET_COMPONENT
export const getComponent = (id, componentType) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/${componentType}/${id}/`)
    .then((res) => {
      dispatch({
        type: GET_COMPONENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD_COMPONENT
export const addComponent = (componentObject, componentType) => (dispatch) => {
  axios
    .post(`http://127.0.0.1:8000/api/${componentType}/`, componentObject)
    .then((res) => {
      dispatch({
        type: ADD_COMPONENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// UPDATE_COMPONENT
export const updateComponent = (componentObject, componentType, id) => (
  dispatch
) => {
  for (var value of componentObject.entries()) {
    console.log(value[0] + ", " + value[1]);
  }
  axios
    .put(`http://127.0.0.1:8000/api/${componentType}/${id}/`, componentObject)
    .then((res) => {
      dispatch({
        type: UPDATE_COMPONENT,
        payload: res.data,
        index: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE_COMPONENT
export const deleteComponent = (id, componentType) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/${componentType}/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_COMPONENT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

