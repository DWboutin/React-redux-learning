import React from 'react';
import { Link } from 'react-router';
import Market from './Market.react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DrugActions from '../actions/drug-actions';

export default class App extends React.Component {
  render() {
    const { dispatch, drugs } = this.props;

    return (
      <div>
        <h1>App</h1>
        <Link to='/'>App</Link>{' '}<Link to='/home'>Home</Link>
        <Market drugs={drugs} {...bindActionCreators(DrugActions, dispatch)} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({ drugs: state.drugs }))(App);