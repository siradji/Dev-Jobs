import React, { useReducer } from 'react';
// IMPORTING types
import { SETLOGGEDIN, GETUSERPROFILE } from '../types';

//  Importing Context Dep
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    isLoggedIn: false,
    userProfile: {}
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //  facebook CallBack
  const responseFacebook = (res) => {
    isLoggedin();
    console.log(res);
    dispatch({
      type: GETUSERPROFILE,
      payload: res.data
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
