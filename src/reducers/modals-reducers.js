import { ACTIONS } from '../utils/consts';

const initialState = {
  title: '',
  description: '',
  placeholder: ''
};

export function modals(state = initialState, action = '') {
  switch (action.type) {

    case ACTIONS.CHANGE_MODAL_INFOS:
      return Object.assign({}, state, {
        title: action.title,
        description: action.description,
        placeholder: action.placeholder
      });

    default:
      return state;
  }
}