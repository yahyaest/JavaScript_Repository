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
} from "../actions/types";

const initialState = {
  merchandises: {
    Desktop_PC: [],
    Laptop: [],
    Components: {},
  },
  merchandise: {},
  currentComponent: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_COMPONENT:
      return {
        ...state,
        merchandise: action.payload,
      };

    case CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload,
      };

    case GET_COMPONENTS:
      const get_keys = state.currentComponent;
      let Components = {};
      Components[get_keys] = action.payload;
      return {
        ...state,
        merchandises: { ...state.merchandises, Components },
      };

    case GET_COMPONENT:
      const get_key = state.currentComponent;
      let Component = {};
      Component[get_key] = action.payload;
      return {
        ...state,
        merchandise: Component,
      };

    case ADD_COMPONENT:
      const add_key = state.currentComponent;
      let NewComponent = {};
      NewComponent[add_key] = [
        ...state.merchandises.Components,
        action.payload,
      ];
      return {
        ...state,
        merchandises: {
          ...state.merchandises,
          Components: NewComponent,
        },
      };

    case UPDATE_COMPONENT:
      const update_key = state.currentComponent;
      let UpdatedComponent = {};
      UpdatedComponent[update_key] = state.merchandises.Components[
        update_key
      ].filter((component) =>
        component.id !== action.index ? component : action.payload
      );
      return {
        ...state,
        merchandises: {
          ...state.merchandises,
          Components: UpdatedComponent,
        },
      };

    case DELETE_COMPONENT:
      const delete_key = state.currentComponent;
      let DeleteComponent = {};
      DeleteComponent[delete_key] = state.merchandises.Components[
        delete_key
      ].filter((component) => component.id !== action.payload);
      return {
        ...state,
        merchandises: {
          ...state.merchandises,
          Components: DeleteComponent,
        },
      };


    default:
      return state;
  }
}
