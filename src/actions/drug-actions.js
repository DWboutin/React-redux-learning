import { ACTIONS } from '../utils/consts';

export function buyDrug(index, qty) {
  return {
    type: ACTIONS.BUY_DRUG,
    index: index,
    qty: qty
  }
}