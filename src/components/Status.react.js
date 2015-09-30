import React from 'react';

export default class Status extends React.Component {
  render() {
    return (
      <div id="status">
        <h2>Status</h2>
        <div><strong>Money: </strong> {this.props.status.money}</div>
      </div>
    )
  }
}