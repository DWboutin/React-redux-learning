import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as DrugActions from '../actions/drug-actions';
import * as StatusActions from '../actions/status-actions';
import * as BackpackActions from '../actions/backpack-actions';
import * as ModalsActions from '../actions/modals-actions';
import { isNumeric } from '../utils/helpers';

import Market from './Market.react';
import Status from './Status.react';
import Backpack from './Backpack.react';
import Modals from './Modals.react';
import Tomorrow from './Tomorrow.react';

class App extends React.Component {

  changeModalInfos_buying(title, drug) {
    const { dispatch, status } = this.props;
    let description;
    let placeholder;
    let availableToBuy = Math.floor(status.cash / drug.currentPrice);

    if(availableToBuy > drug.qty){
      availableToBuy = drug.qty;
    }

    description = `${drug.name} is currently selling for $${drug.currentPrice}. With your available funds, you can buy ${availableToBuy} units.`;
    placeholder = 'How many do you wish to buy?';

    dispatch( ModalsActions.changeInfos(title, description, placeholder) );
  }

  changeModalInfos_selling(title, drug, price, qtybought) {
    const { dispatch, status } = this.props;
    let description;
    let placeholder;
    let profitDeficit;

    if(drug.currentPrice > price){
      profitDeficit = 'for a profit of $' + (drug.currentPrice - price) + ' per unit';
    }else if(price > drug.currentPrice){
      profitDeficit = 'for a deficit of $' + (price - drug.currentPrice) + ' per unit';
    }else{
      profitDeficit = 'to be even';
    }

    description = `${drug.name} is currently being bought for $${drug.currentPrice} per unit. You have ${qtybought} units to sell ${profitDeficit}.`;
    placeholder = 'How many do you wish to sell?';

    dispatch( ModalsActions.changeInfos(title, description, placeholder) );
  }

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
    // changing modal infos
    this.changeModalInfos_buying('Buy ' + drugs[index].name, drugs[index]);

    $('#modal').openModal({
      complete: function(){
        let $qtyInput = $('#quantity');
        let numberToBuy = parseInt($qtyInput.val());
        //reset quantity field
        $qtyInput.val('');
        // if number entered is valid
        if(numberToBuy <= qtyavailable) {
          if (status.cash >= price && qtyavailable > 0) {
            dispatch(DrugActions.buyDrug(index, numberToBuy));
            dispatch(StatusActions.changeCash(cash - (price * numberToBuy)));

            if (!isNumeric(inBackpackIndex)) {
              dispatch(BackpackActions.addItem(drugs[index].name, numberToBuy, price));
            } else {
              dispatch(BackpackActions.changeItem(inBackpackIndex, drugs[index].name, inBackpackQty + numberToBuy, price));
            }
          }
        }
      }
    });
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
    // changing modal infos
    this.changeModalInfos_selling('Sell ' + name, drugs[drugIndex], price, qtybought);

    $('#modal').openModal({
      complete: function(){
        let $qtyInput = $('#quantity');
        let numberToSell = parseInt($qtyInput.val());
        //reset quantity field
        $qtyInput.val('');

        if(numberToSell <= qtybought) {
          if (qtybought > 0) {

            dispatch(DrugActions.changeDrug(drugIndex, drugs[drugIndex].qty + numberToSell));
            dispatch(StatusActions.changeCash(cash + (numberToSell * drugs[drugIndex].currentPrice)));

            if (qtybought > 1 && numberToSell != qtybought) {
              dispatch(BackpackActions.changeItem(index, drugs[index].name, qtybought - numberToSell, price));
            } else {
              dispatch(BackpackActions.deleteItem(index));
            }

          }
        }
      }
    });
  }

  handleStayHere(e) {
    const { dispatch, status } = this.props;
    dispatch( DrugActions.changeListsPrices(status.day) );
    dispatch( StatusActions.changeDay( status.day + 1 ) );
  }

  render() {
    const { dispatch, drugs, status, backpack, modals } = this.props;

    return (
      <div>
        <h1>App</h1>
        <Link to='/'>App</Link>{' '}<Link to='/home'>Home</Link>
        <div className="row">
          <div className="col s5">
            <Market drugs={drugs} handleBuyDrug={this.handleBuyDrug.bind(this)} />
          </div>
          <div className="col s3">
            <Tomorrow onStayHere={this.handleStayHere.bind(this)} />
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
        <Modals modals={modals} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({ drugs: state.drugs, status: state.status, backpack: state.backpack, modals: state.modals }))(App);