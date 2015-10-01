import { ACTIONS } from '../utils/consts';

var initialState = {cash: 2000};

export function status(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.CHANGE_CASH:
      return Object.assign({}, state, {
        cash: action.amount
      });

    default:
      return state;
  }
}