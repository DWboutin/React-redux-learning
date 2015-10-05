import { ACTIONS } from '../utils/consts';
import { buildCurrentPlaceMessage } from '../utils/informationsMessages';

var initialState = {
  currentPlaceMessage: {
    name: '',
    message: '',
    way: ''
  }
};

export function informations(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.BUILD_TOMORROW_MESSAGES:
      return Object.assign({}, state, { currentPlaceMessage: buildCurrentPlaceMessage(action.list) });

    default:
      return state;
  }
}