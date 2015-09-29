import React from 'react';
import express from 'express';
import createLocation from 'history/lib/createLocation';
import {Router, Route, match, RoutingContext } from 'react-router';
import routes from './routes';

const app = express();

app.use('/', (req, res) => {
  let location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.status(301).redirect(redirectLocation.pathname + redirectLocation.search);
    }else if (error) {
      res.status(500).send(error.message);
    }else if (renderProps == null) {
      res.status(404).send('Not found');
    }else {
      res.status(200).send(React.renderToString(<RoutingContext {...renderProps}/>));
    }
  })
});

export default app;