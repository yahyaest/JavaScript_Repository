import axios from "axios";
import * as actions from "../api";

//// Action to dispatch
// const action = {
//   type: "apiCallBegan", //apiRequest
//   payload: {
//     url: "/bugs",
//     method: "get",
//     data: {},
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// };

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    //General succes action
    dispatch(actions.apiCallSuccess(response.data));
    //Specefic succes action
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    //General error action
    dispatch(actions.apiCallFailed(error.message));
    //Specefic error action
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
export default api;
