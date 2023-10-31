import { LOGOUT_USER, SET_USER } from "../actions_types";

const initialState = {
  user: null,
  isLogged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        isLogged: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default: {
      return state;
    }
  }
};
