import { ACTIONS } from '../utils/consts';

var initialState = {money: 1000};

export function status(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.CHANGE_MONEY:
      console.log(action.ammount);
      return Object.assign({}, state, {
        money: state.money - action.amount
      });

    default:
      return state;
  }
}