import { ACTIONS } from '../utils/consts';
import drugList from '../utils/drug-list';

export function drugs(state = drugList, action) {
  switch (action.type) {
    case ACTIONS.BUY_DRUG:
      let index = parseInt(action.index);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          qty: state[index].qty - 1
        }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}