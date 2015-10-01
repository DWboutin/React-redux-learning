import React from 'react';

export default class Status extends React.Component {
  render() {
    return (
      <div id="status">
        <h2>Status</h2>
        <div><strong>Cash: </strong> {this.props.status.cash}</div>
      </div>
    )
  }
}