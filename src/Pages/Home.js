// importing required modules
import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Importing styling
import '../Assets/styles/home.css';
import styled from 'styled-components';

// importing Marerial UI components
import Tynography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from '../Components/LoginButton';

// initializing makeStyles for material-ui styling
const useStyles = makeStyles((theme) => ({
  inner: {
    position: 'absolute',
    top: '20%',
    left: '20%'
  },
  head_1: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },

  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      position: 'absolute',
      top: '60%',
      left: '20%'
    }
  }
}));
const Home = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getLogged();
  }, []);
  const getLogged = (auth) => {
    setLoggedIn(auth);
  };
  const classes = useStyles();
  if (isLoggedIn) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className='TopSection'>
        <Inner className={classes.inner}>
          <Tynography
            variant='h2'
            component='h2'
            gutterBottom
            className={classes.head_1}
          >
            Finding Developer Jobs Has Never Been Easy
          </Tynography>
          <Tynography
            variant='h5'
            component='h5'
            className={classes.head_1}
            gutterBottom
          >
            View Available positions posted on Github JObs
          </Tynography>
          <Tynography
            component='healine'
            variant='h4'
            gutterBottom
            className={classes.mobile}
          >
            Find Your Next Dev Job
          </Tynography>
          <Tynography component='p' variant='p' className={classes.mobile}>
            Start Searching for your dream Job
          </Tynography>
          <LoginButton isLoggedIn={getLogged} />
        </Inner>
      </div>
    </Fragment>
  );
};

// styled components
const Inner = styled.div`
  margin: auto;
  width: 60%;
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export default Home;
