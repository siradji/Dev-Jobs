import React from 'react';

// material UI imports
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

// styled component imports
import styled from 'styled-components';

// Initializing styled Component
const Container = styled.div`
  width: 80%;
  margin: auto;
`;

// Initializing Makestyle
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  branding: {
    display: 'flex'
  },
  icon: {
    fontSize: '60px',
    padding: '0 10px'
  },
  title: {
    paddingTop: '10px'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  //  initializing useStyles
  return (
    <div>
      <AppBar>
        <ToolBar>
          <Container className={classes.root}>
            <div className={classes.branding}>
              <CodeIcon fontSize='large' className={classes.icon} />
              <Typography component='h1' variant='h4' className={classes.title}>
                Devjob
              </Typography>
            </div>
          </Container>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Navbar;
