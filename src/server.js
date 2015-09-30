import React from 'react';
import express from 'express';
import routing from './middleware/routing';
import Html from './html.react';

const app = express();

app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res) => {
  routing(req, res)
  .then((routingReturn) => {
      res.send('<!DOCTYPE html>\n' + React.renderToString(<Html component={routingReturn.component} initialState={routingReturn.initialState} />));
  });
});

export default app;