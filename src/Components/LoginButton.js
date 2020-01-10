import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';

// Importing Context
import AuthContext from '../Context/Auth/authContext';

const LoginButton = () => {
  const authContext = useContext(AuthContext);
  const { isLoggedIn, responseFacebook } = authContext;

  let Code;

  if (isLoggedIn) {
    Code = null;
  } else {
    Code = (
      <FacebookLogin
        appId='2462505357334024'
        autoLoad={true}
        fields='name,location,email,picture'
        callback={responseFacebook}
      />
    );
  }
  return <div>{Code}</div>;
};

export default LoginButton;
