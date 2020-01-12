import React from 'react';
import { useReducer, useEffect } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import { SET_AUTH, SET_LOADING, IS_AUTHENTICATED, GET_USER } from '../Types';

import createAuth0Client from '@auth0/auth0-spa-js';

const AuthState = (props) => {
  const initialState = {
    auth0Client: null,
    isAuthenticated: false,
    user: null,
    loading: true
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const config = {
    domain: process.env.REACT_APP_DOMAIN,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: window.location.origin
  };

  useEffect(() => {
    initializeAuth0();

    // eslint-disable-next-line
  }, []);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(config);
    dispatch({
      type: SET_AUTH,
      payload: auth0Client
    });

    if (window.location.search.includes('code=')) {
      return handleRedirectCallBack();
    }
    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;
    setLoading();

    dispatch({
      type: IS_AUTHENTICATED,
      payload: isAuthenticated
    });
    dispatch({
      type: GET_USER,
      payload: user
    });
  };
  const handleRedirectCallBack = async () => {
    const auth0Client = await createAuth0Client(config);
    await auth0Client.handleRedirectCallback();

    const user = await auth0Client.getUser();
    setLoading();
    dispatch({
      type: GET_USER,
      payload: user
    });
    dispatch({
      type: IS_AUTHENTICATED,
      payload: true
    });
    window.history.replaceState({}, document.title, window.location.pathname);
  };
  const { auth0Client, loading, isAuthenticated, user } = state;
  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        auth0Client,
        loading,
        isAuthenticated,
        user,
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokentClaims: (...p) => auth0Client.getTokentClaims(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
