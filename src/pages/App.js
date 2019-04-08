import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withStyles, CssBaseline } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import history from '../history';
import Today from 'pages/app/Today';
import News from 'pages/app/News';
import Social from 'pages/app/Social';
import DevOps from 'pages/app/DevOps';
import Health from 'pages/app/Health';
import Header from './app/Header';
import Footer from './app/Footer';

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
  const { classes, theme } = props;
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.appRoot}>
      <Router history={history}>
        <CssBaseline />
        <div className={classes.appBar}>
          <Header>{ROUTES}</Header>
          <main>
            <Switch>
              <Route path="/" exact component={Today} />
              <Route path="/news" exact component={News} />
              <Route path="/social" exact component={Social} />
              <Route path="/devops" exact component={DevOps} />
              <Route path="/health" exact component={Health} />
            </Switch>
          </main>
          {matches && <Footer />}
        </div>
      </Router>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
