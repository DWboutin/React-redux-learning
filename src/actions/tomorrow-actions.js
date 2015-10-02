import { ACTIONS } from '../utils/consts';

export function buildTomorrowList(list, day = 0) {
  return {
    type: ACTIONS.BUILD_TOMORROW_LIST,
    list: list,
    day: day
  };
}