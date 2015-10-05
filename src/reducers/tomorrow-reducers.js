import { ACTIONS } from '../utils/consts';
import { randomiseDrugList } from '../utils/helpers';

var initialState = {
  currentPlaceList: []
};

export function tomorrow(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.BUILD_TOMORROW_LIST:
      let randomactionList = randomiseDrugList([...action.list], action.day);
      let newList = Object.assign({}, state, { currentPlaceList: randomactionList });
      console.log(newList);
      return newList;

    default:
      return state;
  }
}