import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Importing material UI
import Grid from '@material-ui/core/Grid';
import Typnography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CodeIcon from '@material-ui/icons/Code';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

//  importing Styled component
import Styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginTop: [theme.spacing(15)]
    }
  },
  Grid1: {
    padding: 'auto'
  },
  title: {
    textAlign: 'center',
    marginTop: 10
  }
}));
const color = '##e6e6e6';
const Main = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={4} justify='center'>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
            <Card className={classes.Grid1} color={color}>
              <Typnography
                variant='h6'
                component='h6'
                gutterBottom
                className={classes.title}
              ></Typnography>

              <CardContent>
                <Typnography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, laboriosam.
                </Typnography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
            <Typnography
              variant='h6'
              component='h1'
              gutterBottom
              className={classes.title}
            >
              Featured Jobs
            </Typnography>
            <Card className={classes.Grid1}>
              <CardContent>
                <Typnography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, voluptatibus assumenda ad aliquam expedita
                  molestias tempore. Consequatur ab accusantium sint reiciendis
                  mollitia minus nobis quo ipsam iste architecto libero sit
                  deserunt accusamus officiis veniam repellat eaque doloribus,
                  quas ex vitae sunt in porro? Ea porro asperiores laborum vel
                  dolores inventore. Quos culpa officia nihil, facilis
                  doloremque et, atque veritatis perferendis aut architecto,
                  exercitationem minima! Exercitationem laborum numquam omnis,
                  soluta consequatur quasi saepe dolores necessitatibus ducimus
                  nulla quisquam error quas. Quisquam obcaecati laboriosam
                  animi? Delectus consequuntur, quibusdam atque harum laudantium
                  perspiciatis recusandae porro hic illo quos, sed, corporis
                  temporibus ipsa vero?
                </Typnography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Main;
