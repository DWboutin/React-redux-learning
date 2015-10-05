import { ACTIONS } from '../utils/consts';

export function buildTomorrowMessages(list) {
  return {
    type: ACTIONS.BUILD_TOMORROW_MESSAGES,
    list: list
  };
}