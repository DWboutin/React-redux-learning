import React from 'react';
import express from 'express';
import createLocation from 'history/lib/createLocation';
import {Router, Route, match, RoutingContext } from 'react-router';
import routes from '../routes';

function getRootComponent(renderProps) {
  let component = null;

  component = (<RoutingContext {...renderProps} />);

  return component;
}

export default function(req, res) {
  let location = createLocation(req.url);

  return new Promise( (resolve, reject) => {
    match({ routes, location, undefined }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.status(301).redirect(redirectLocation.pathname + redirectLocation.search);
      }else if (error) {
        res.status(500).send(error.message);
      }else if (renderProps == null) {
        res.status(404).send('Not found');
      }

      resolve(getRootComponent(renderProps));
    });
  });
}