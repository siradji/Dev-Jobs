// importing required modules

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Importing material UI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Importing Components

import Navbar from './Navbar';
import Main from './Main';
import Search from './Search';
// importing styled components
import Styled from 'styled-components';
const Container = Styled.div`
width: 90%;
margin: auto;
`;
//  Initializing makestyles
const useStyles = makeStyles((theme) => ({}));

const Dashboard = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Search />
        <Main />
      </Container>
    </Fragment>
  );
};

// Dashboard.prototype {

// }
export default Dashboard;
