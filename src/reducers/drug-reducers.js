import { ACTIONS } from '../utils/consts';
import drugList from '../utils/drug-list';

export function drugs(state = drugList, action = '') {
  switch (action.type) {

    case ACTIONS.BUY_DRUG:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          qty: state[action.index].qty - 1
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}