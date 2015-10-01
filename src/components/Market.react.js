import React from 'react';

export default class Market extends React.Component {
  propTypes: {
    drugs: React.PropTypes.array.isRequired
  }

  buildDrugsList() {
    let list = this.props.drugs.map((item, index) => {
      let classNames = "waves-effect waves-light btn";
      let iconName;

      if(item.qty == 0){
        classNames += " disabled";
      }

      if(item.currentPrice > item.historyPrice[item.historyPrice.length - 2]){
        iconName = 'trending_up';
      }else if(item.currentPrice < item.historyPrice[item.historyPrice.length - 2]){
        iconName = 'trending_down';
      }else{
        iconName = 'trending_flat';
      }

      return (
        <tr key={item.name}>
          <td><i className="material-icons">{iconName}</i></td>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.currentPrice}</td>
          <td>
            <a className={classNames} data-index={ index } data-price={item.currentPrice} data-qtyavailable={item.qty} onClick={ this.props.handleBuyDrug }>Buy</a>
          </td>
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
            <th></th>
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