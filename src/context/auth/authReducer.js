import { SET_AUTH, SET_LOADING, GET_USER, IS_AUTHENTICATED } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth0Client: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
