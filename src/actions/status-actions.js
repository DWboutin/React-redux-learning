import { ACTIONS } from '../utils/consts';

export function changeCash(amount) {
  return {
    type: ACTIONS.CHANGE_CASH,
    amount: amount
  }
}

export function changeDay(day) {
  return {
    type: ACTIONS.CHANGE_DAY,
    day: day
  };
}