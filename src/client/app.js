import React from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App.react';
import Home from '../components/Home.react';
import routes from '../routes';
import createHistory from 'history/lib/createBrowserHistory';
import { APP_DOM_CONTAINER } from '../utils/consts';

React.render((
  <Router history={createHistory()}>
    {routes}
  </Router>
), document.getElementById( APP_DOM_CONTAINER ));
