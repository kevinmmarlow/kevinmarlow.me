import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import history from '../history';
import Today from 'pages/app/Today';
import News from 'pages/app/News';
import Social from 'pages/app/Social';
import DevOps from 'pages/app/DevOps';
import Health from 'pages/app/Health';
import FAQ from 'pages/app/FAQ';
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

const App = () => {
  return (
    <Router history={history}>
      <Header>{ROUTES}</Header>
      <main>
        <Switch>
          <Route path="/" exact component={Today} />
          <Route path="/news" exact component={News} />
          <Route path="/social" exact component={Social} />
          <Route path="/devops" exact component={DevOps} />
          <Route path="/health" exact component={Health} />
          <Route path="/faq" exact component={FAQ} />
        </Switch>
      </main>
      <MediaQuery query="(min-device-width: 960px)">
        <Footer />
      </MediaQuery>
    </Router>
  );
};

export default App;
