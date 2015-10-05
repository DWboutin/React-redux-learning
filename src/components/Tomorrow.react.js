import React from 'react';

export default class Tomorrow extends React.Component {
  render() {
    let { onStayHere, day } = this.props;

    return (
      <div id="tomorow">
        <h2>Tomorrow</h2>
        <p><button className="waves-effect waves-light btn" onClick={onStayHere}>Stay here</button></p>
        <p><button className="waves-effect waves-light btn">Fly away</button></p>
      </div>
    );
  }
}