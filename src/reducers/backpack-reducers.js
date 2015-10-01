import { ACTIONS } from '../utils/consts';
import Immutable from 'immutable';

const initialState = new Immutable.List();

export function backpack(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.ADD_BACKPACK_ITEM:
      return state.concat({name: action.name, qty: action.qty, boughtPrice: action.boughtPrice});

    case ACTIONS.CHANGE_BACKPACK_ITEM:
      return state.set(action.index, {name: action.name, qty: action.qty, boughtPrice: action.boughtPrice});

    case ACTIONS.DELETE_BACKPACK_ITEM:
      return state.delete(action.index);

    default:
      return state;
  }
}