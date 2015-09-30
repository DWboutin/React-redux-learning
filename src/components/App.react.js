import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to='/'>App</Link>{' '}<Link to='/home'>Home</Link>
        {this.props.children}
      </div>
    );
  }
}