import React from 'react';

export default class Market extends React.Component {
  propTypes: {
    drugs: React.PropTypes.array.isRequired
  }

  buildDrugsList() {
    let list = this.props.drugs.map((item, index) => {
      return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.currentPrice}</td>
          <td><a className="waves-effect waves-light btn" data-index={ index } data-price={item.currentPrice} data-qtyavailable={item.qty} onClick={ this.props.handleBuyDrug }>Buy</a></td>
        </tr>
      );
    });
    return list;
  }

  render() {
    return (
      <div id="market">
        <h2>Market</h2>
        <table className="striped">
          <thead>
          <tr>
            <th data-field="id">Drug name</th>
            <th data-field="name">Quantity</th>
            <th data-field="price">Price</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {this.buildDrugsList()}
          </tbody>
        </table>
      </div>
    );
  }
}