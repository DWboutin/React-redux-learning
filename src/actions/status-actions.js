import { ACTIONS } from '../utils/consts';

export function changeCash(amount) {
  return {
    type: ACTIONS.CHANGE_CASH,
    amount: amount
  }
}