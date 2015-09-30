import React from 'react';

export default class Market extends React.Component {
  propTypes: {
    drugs: React.PropTypes.array.isRequired
  }

  buildDrugsList() {
    let list = this.props.drugs.map((drug, index) => {
      return (
        <tr key={drug.name}>
          <td>{drug.name}</td>
          <td>{drug.qty}</td>
          <td>{drug.minPrice}</td>
          <td><a className="waves-effect waves-light btn" data-index={ index } onClick={ this.handleBuyClick.bind(this) }>Buy</a></td>
        </tr>
      );
    });
    return list;
  }

  handleBuyClick(e) {
    let { index } = e.target.dataset;

    this.props.buyDrug(index);
  }

  render() {
    return (
      <div id="market">
        <h2>Market</h2>
        <table>
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