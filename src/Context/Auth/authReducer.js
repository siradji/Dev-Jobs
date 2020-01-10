import { SETLOGGEDIN, GETUSERPROFILE } from '../types';
export default (state, action) => {
  switch (action.type) {
    case SETLOGGEDIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case GETUSERPROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    default:
      return {
        state
      };
  }
};
