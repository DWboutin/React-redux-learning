import { ACTIONS } from '../utils/consts';

export function changeInfos(title, description, placeholder) {
  return {
    type: ACTIONS.CHANGE_MODAL_INFOS,
    title: title,
    description: description,
    placeholder: placeholder
  }
}