import React from 'react';
import { APP_NAME } from './utils/consts';

export default class Html extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>{ APP_NAME }</title>
      </head>
      <body>
        <div id="react-view" dangerouslySetInnerHTML={{__html: React.renderToString(this.props.component)}}></div>
        <script src="assets/app.min.js"></script>
      </body>
      </html>
    );
  }
}