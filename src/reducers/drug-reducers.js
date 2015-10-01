import { ACTIONS } from '../utils/consts';
import drugList from '../utils/drug-list';

let initialState;

if(typeof process === 'object' && process + '' === '[object process]'){
  initialState = drugList;
}else{
  initialState = window.__INITIAL_STATE__.drugs;
}

export function drugs(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.BUY_DRUG:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          qty: state[action.index].qty - action.number
        }),
        ...state.slice(action.index + 1)
      ];

    case ACTIONS.CHANGE_DRUG:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          qty: action.number
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}