import {
  AUTH_ERROR,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE
} from "../ActionTypes";

const initialState = {
  isLoading: false,
  error: null,
  user: null
};

export const authReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case SIGNUP_REQUEST:
      return state;
    case SIGNUP_RESPONSE:
      return {
        isLoading: false,
        error: null,
        user: action.payload
      };

    case AUTH_ERROR:
      return {
        isLoading: false,
        error: action.payload,
        user: null
      };

    case LOGIN_REQUEST:
      return state;

    case LOGIN_RESPONSE:
      return {
        isLoading: false,
        error: null,
        user: action.payload
      };

    case LOGIN_ERROR:
      return {
        isLoading: false,
        error: action.payload,
        user: null
      };

    default:
      return state;
  }
};
