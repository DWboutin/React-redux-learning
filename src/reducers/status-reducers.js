import { ACTIONS } from '../utils/consts';

var initialState = {
  cash: 2500,
  day: 1
};

export function status(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.CHANGE_CASH:
      return Object.assign({}, state, {
        cash: action.amount
      });

    case ACTIONS.CHANGE_DAY:
      return Object.assign({}, state, {
        day: action.day
      });

    default:
      return state;
  }
}