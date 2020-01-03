// importing required modules

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Importing amterial UI
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typnography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import CodeIcon from '@material-ui/icons/Code';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

// importing styled components
import stytled from 'styled-components';

//  Initializing makestyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  listItems: {
    display: 'flex'
  },
  item: {
    padding: '0 10px'
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar>
        <ToolBar className={classes.root}>
          <div>
            <Typnography component='div' variant='h5'>
              <CodeIcon /> DevJobs
            </Typnography>
          </div>
          <div className={classes.listItems}>
            <Typnography
              component='h1'
              variant='body1'
              className={classes.item}
            >
              <AccountCircleOutlinedIcon />
            </Typnography>
            <Typnography
              component='h1'
              variant='body1'
              className={classes.item}
            >
              <ExitToAppOutlinedIcon />
            </Typnography>
          </div>
        </ToolBar>
      </AppBar>
    </Fragment>
  );
};

// Navbar.prototype {

// }
export default Navbar;
