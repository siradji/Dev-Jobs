import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = (props) => {
  const [isLoggedIn, setLoggedIn] = useState('');
  const [userId, setUserId] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [picture, setPicture] = useState('');

  const responseFacebook = (res) => {
    setLoggedIn(true);
    setUserId(res.userID);
    setname(res.name);
    setemail(res.email);
    setPicture(res.picture.data.url);
    props.isLoggedIn(true);
    console.log(res);
  };

  const componentClicked = () => {
    console.log('im clicked');
  };
  let Code;

  if (isLoggedIn) {
    Code = null;
  } else {
    Code = (
      <FacebookLogin
        appId='2462505357334024'
        autoLoad={true}
        fields='name, location,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return <div>{Code}</div>;
};

export default LoginButton;
