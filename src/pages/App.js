import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import history from '../history';
import Today from 'pages/app/Today';
import News from 'pages/app/News';
import Social from 'pages/app/Social';
import DevOps from 'pages/app/DevOps';
import Health from 'pages/app/Health';

const styles = theme => ({
  appRoot: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    width: '100%'
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.appRoot}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Today} />
          <Route path="/news" exact component={News} />
          <Route path="/social" exact component={Social} />
          <Route path="/devops" exact component={DevOps} />
          <Route path="/health" exact component={Health} />
        </Switch>
      </Router>
    </div>
  );
};

export default withStyles(styles)(App);
