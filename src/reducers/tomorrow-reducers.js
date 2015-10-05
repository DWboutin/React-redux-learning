import { ACTIONS } from '../utils/consts';
import { randomiseDrugList } from '../utils/helpers';
import drugList from '../utils/drug-list';

var initialState = {
  currentPlaceList: drugList
};

export function tomorrow(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.BUILD_TOMORROW_LIST:
      return Object.assign({}, state, { currentPlaceList: action.list });

    default:
      return state;
  }
}