import React from 'react';
import { Route } from 'react-router';
import App from './components/App.react';
import Home from './components/Home.react';

export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
  </Route>
);