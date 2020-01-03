import React from 'react';
import PropTypes from 'prop-types';

// importing Material UI compnents
import Typnography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// importing Styled Component

// Initializing UseStyles
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginTop: '80px',
      width: '60%',
      margin: 'auto'
    }
  },
  search: {
    [theme.breakpoints.up('md')]: {
      width: [theme.spacing(70)],
      height: [theme.spacing(3)]
    }
  },
  button: {
    width: [theme.spacing(20)],
    marginLeft: [theme.spacing(5)],
    marginRight: [theme.spacing(5)],
    paddingTop: [theme.spacing(1)],
    paddingBottom: [theme.spacing(1)]
  },
  Paper: {
    paddingTop: [theme.spacing(2)],
    paddingBottom: [theme.spacing(3)],
    paddingLeft: [theme.spacing(5)],
    paddingRight: [theme.spacing(5)],
    width: [theme.spacing(100)],
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  paperMobile: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    marginTop: [theme.spacing(10)],
    marginBottom: [theme.spacing(5)],
    paddingRight: [theme.spacing(2)],
    paddingTop: [theme.spacing(1)],
    paddingLeft: [theme.spacing(2)],
    paddingBottom: [theme.spacing(1)]
  },
  searchMobile: {
    width: '78%'
  },
  buttonMobile: {
    width: '20%'
  },
  mobileForm: {
    margin: 'auto'
  }
}));

// initializing styled compoment
const Search = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.Paper} elavation='4'>
        <form noValidate autoComplete='off'>
          <TextField
            variant='filled'
            size='small'
            label='Search'
            placeholder='Search For Jobs '
            className={classes.search}
          />

          <Button
            type='submit'
            variant='contained'
            size='small'
            className={classes.button}
          >
            Search
          </Button>
        </form>
      </Paper>
      {/* Search Section For Mobile and small device */}

      <Paper className={classes.paperMobile}>
        <form noValidate autoComplete='off' className={classes.mobileForm}>
          <TextField
            variant='filled'
            size='small'
            label='Search'
            placeholder='Job title, Location , type '
            width={4 / 5}
            className={classes.searchMobile}
          />

          <Button type='submit' width={1 / 5} className={classes.buttonMobile}>
            {' '}
            <SearchIcon />
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Search;
