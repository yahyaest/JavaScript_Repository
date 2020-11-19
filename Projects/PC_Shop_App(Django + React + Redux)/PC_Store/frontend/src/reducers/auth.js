import {
  USER_LOADING,
  USER_LOADED,
  PROFILE_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ADD_REMOVE_TO_PROFILE,
  ADD_REMOVE_TO_CHART,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  username: localStorage.getItem("username"),
  profile: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.user.username);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        profile: null,
      };
    case ADD_REMOVE_TO_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          data: {
            ...state.profile.data,
            favourites: [
              ...state.profile.data.favourites,
              action.payload.favourites,
            ],
          },
        },
      };
    case ADD_REMOVE_TO_CHART:
      return {
        ...state,
        profile: {
          ...state.profile,
          data: {
            ...state.profile.data,
            chart: [
              ...state.profile.data.chart,
              action.payload.chart,
            ],
          },
        },
      };

    default:
      return state;
  }
}
