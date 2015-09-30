import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DrugActions from '../actions/drug-actions';
import * as StatusActions from '../actions/status-actions';

import Market from './Market.react';
import Status from './Status.react';

export default class App extends React.Component {
  render() {
    const { dispatch, drugs, status } = this.props;

    return (
      <div>
        <h1>App</h1>
        <Link to='/'>App</Link>{' '}<Link to='/home'>Home</Link>
        <Status status={status} {...bindActionCreators(StatusActions, dispatch)} />
        <Market drugs={drugs} {...bindActionCreators(DrugActions, dispatch)} {...bindActionCreators(StatusActions, dispatch)} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({ drugs: state.drugs, status: state.status }))(App);