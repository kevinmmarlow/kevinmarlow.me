import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import history from '../history';
import Today from 'pages/app/Today';
import News from 'pages/app/News';
import Social from 'pages/app/Social';
import DevOps from 'pages/app/DevOps';
import Health from 'pages/app/Health';
import Header from './app/Header';

const ROUTES = [
  {
    path: '/',
    name: 'Today',
    component: Today
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/social',
    name: 'Social',
    component: Social
  },
  {
    path: '/devops',
    name: 'DevOps',
    component: DevOps
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  }
];

const styles = theme => ({
  appRoot: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    width: '100%'
  },
  appBar: {
    flexGrow: 1
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.appRoot}>
      <Router history={history}>
        <div className={classes.appBar}>
          <Header>{ROUTES}</Header>
          <div style={{ padding: '2rem' }}>
            <Switch>
              <Route path="/" exact component={Today} />
              <Route path="/news" exact component={News} />
              <Route path="/social" exact component={Social} />
              <Route path="/devops" exact component={DevOps} />
              <Route path="/health" exact component={Health} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default withStyles(styles)(App);
