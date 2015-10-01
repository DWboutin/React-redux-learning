import React from 'react';

export default class Backpack extends React.Component {

  buildBackpackList() {
    let { backpack } = this.props;
    let list = backpack.map((item, index) => {
      return (
        <tr key={"backpack_" + item.name + "_" + index}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.boughtPrice}</td>
          <td><a className="waves-effect waves-light btn" data-index={ index } data-name={item.name} data-price={item.boughtPrice} data-qtybought={item.qty} onClick={ this.props.handleSellDrug }>Sell</a></td>
        </tr>
      );
    });
    return list;
  }

  render() {
    return (
      <div id="backpack">
        <h2>Backpack</h2>
        <table className="striped">
          <thead>
          <tr>
            <th data-field="id">Name</th>
            <th data-field="name">Quantity</th>
            <th data-field="price">Bought Price</th>
            <th data-field="action">Actions</th>
          </tr>
          </thead>
          <tbody>
            {this.buildBackpackList()}
          </tbody>
        </table>
      </div>
    );
  }
}