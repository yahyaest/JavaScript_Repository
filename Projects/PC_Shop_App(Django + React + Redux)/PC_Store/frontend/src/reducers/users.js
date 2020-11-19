import * as actions from "../actions/types";

const initialState = {
  users: [],
  user: {},
  loggedInUser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.RESET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case actions.LOGGED_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case actions.GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case actions.UPDATE_USER:
      return state.users.map((user) =>
        user.id !== action.index ? user : action.payload
      );

    case actions.DELETE_USER:
      return state.users.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
}
