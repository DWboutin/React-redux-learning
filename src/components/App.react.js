import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as DrugActions from '../actions/drug-actions';
import * as StatusActions from '../actions/status-actions';
import * as BackpackActions from '../actions/backpack-actions';
import { isNumeric } from '../utils/helpers';

import Market from './Market.react';
import Status from './Status.react';
import Backpack from './Backpack.react';

class App extends React.Component {

  handleBuyDrug(e) {
    let { index, price, qtyavailable } = e.target.dataset;
    const { dispatch, status, drugs, backpack } = this.props;
    let cash = parseInt(status.cash);
    // To pass infos to the action
    let inBackpackIndex = undefined;
    let inBackpackQty = 0;

    index = parseInt(index);
    price = parseInt(price);

    backpack.map((item, i) => {
      // if the item is already in the backback and is equal to the current price
      if(item.name === drugs[index].name && item.boughtPrice === drugs[index].currentPrice){
        inBackpackIndex = i;
        inBackpackQty = item.qty;
      }
    });

    if(status.cash >= price && qtyavailable > 0){
      dispatch( DrugActions.buyDrug(index) );
      dispatch( StatusActions.changeCash(cash - price) );

      if(!isNumeric(inBackpackIndex)){
        dispatch( BackpackActions.addItem( drugs[index].name, 1, price ) );
      }else{
        dispatch( BackpackActions.changeItem( inBackpackIndex, drugs[index].name, inBackpackQty + 1, price ) );
      }
    }
  }

  handleSellDrug(e) {
    let { index, price, name, qtybought } = e.target.dataset;
    const { dispatch, status, drugs, backpack } = this.props;
    let drugIndex = undefined;
    let cash = parseInt(status.cash);

    index = parseInt(index);
    price = parseInt(price);

    for (let i = 0; i < drugs.length; i++) {
      if(drugs[i].name === name){
        drugIndex = i;
        break;
      }
    }

    if(qtybought > 0){
      dispatch( DrugActions.changeDrug(drugIndex, drugs[drugIndex].qty + 1) );
      dispatch( StatusActions.changeCash(cash + price) );
      if(qtybought > 1){
        dispatch( BackpackActions.changeItem( index, drugs[index].name, qtybought - 1, price ) );
      }else{
        dispatch( BackpackActions.deleteItem( index ) );
      }
    }
  }

  render() {
    const { dispatch, drugs, status, backpack } = this.props;

    return (
      <div>
        <h1>App</h1>
        <Link to='/'>App</Link>{' '}<Link to='/home'>Home</Link>
        <div className="row">
          <div className="col s5">
            <Market drugs={drugs} handleBuyDrug={this.handleBuyDrug.bind(this)} />
          </div>
          <div className="col s4">
            <div className="row">
              <div className="col s12">
                <Status status={status} />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <Backpack backpack={backpack} handleSellDrug={this.handleSellDrug.bind(this)} />
              </div>
            </div>
          </div>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({ drugs: state.drugs, status: state.status, backpack: state.backpack }))(App);