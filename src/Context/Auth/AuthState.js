import React, { useReducer } from 'react';
// IMPORTING types
import { SETLOGGEDIN, GETUSERPROFILE } from '../types';

//  Importing Context Dep
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    isLoggedIn: false,
    userProfile: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //  facebook CallBack
  const responseFacebook = (res) => {
    isLoggedin();
    localStorage.setItem('authToken', res.accessToken);
    localStorage.setItem('expires', res.accessToken);

    dispatch({
      type: GETUSERPROFILE,
      payload: res
    });
  };

  const isLoggedin = () => {
    dispatch({
      type: SETLOGGEDIN
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        userProfile: state.userProfile,
        responseFacebook
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
