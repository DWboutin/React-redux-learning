import React from 'react';
import { APP_NAME } from './utils/consts';

export default class Html extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let initialState = JSON.stringify(this.props.initialState);

    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>{ APP_NAME }</title>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css" />
        <script dangerouslySetInnerHTML={{__html: 'window.__INITIAL_STATE__ = ' + initialState}}></script>
      </head>
      <body>
        <div id="react-view" dangerouslySetInnerHTML={{__html: React.renderToString(this.props.component)}}></div>
        <script src="assets/app.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js"></script>
      </body>
      </html>
    );
  }
}