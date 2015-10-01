import React from 'react';

export default class Status extends React.Component {
  render() {
    let { status } = this.props;

    return (
      <div id="status">
        <h2>Status</h2>
        <p><strong>Cash: </strong> {status.cash}</p>
        <p><strong>Day: </strong> {status.day}</p>
      </div>
    )
  }
}