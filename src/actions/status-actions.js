import { ACTIONS } from '../utils/consts';

export function changeMoney(amount) {
  return {
    type: ACTIONS.CHANGE_MONEY,
    amount: amount
  }
}