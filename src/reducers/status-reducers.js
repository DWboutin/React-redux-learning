import { ACTIONS } from '../utils/consts';

var initialState = {money: 1000};

export function status(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.CHANGE_MONEY:
      return Object.assign({}, state, {
        money: state.money - action.amount
      });

    default:
      return state;
  }
}