import { ACTIONS } from '../utils/consts';
import { randomiseDrugList } from '../utils/helpers';

var initialState = {
  currentPlaceList: []
};

export function tomorrow(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.BUILD_TOMORROW_LIST:
      let newList = Object.assign({}, state, {currentPlaceList: randomiseDrugList(action.list, action.day)});
      console.log(newList);
      return newList;

    default:
      return state;
  }
}