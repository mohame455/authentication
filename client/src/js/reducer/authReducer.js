import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_AUTH_USER,
  GET_AUTH_USER_FAIL,
  GET_AUTH_USER_SUCCESS,
  LOGOUT,
} from "../const/actionTypes";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case GET_AUTH_USER:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: payload.user,
        token: payload.token,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
        token: localStorage.getItem("token"),
      };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
    case GET_AUTH_USER_FAIL:
    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
