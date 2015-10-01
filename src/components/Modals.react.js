import React from 'react';

export default class Modals extends React.Component {

  render() {
    let { title, description, placeholder } = this.props.modals;

    return (
      <div id="modal" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>{ title }</h4>
          <p>{ description }</p>

          <div className="input-field">
            <input placeholder={placeholder} id="quantity" type="text" />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-action modal-close waves-effect waves-green btn-flat">Agree</button>
        </div>
      </div>
    );
  }
}