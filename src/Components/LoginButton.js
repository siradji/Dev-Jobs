import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = (props) => {
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
