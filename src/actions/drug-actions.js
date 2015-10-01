import { ACTIONS } from '../utils/consts';

export function buyDrug(index, drug, qty) {
  return {
    type: ACTIONS.BUY_DRUG,
    index: index,
    drug: drug,
    number: qty
  }
}

export function changeDrug(index, number) {
  return {
    type: ACTIONS.CHANGE_DRUG,
    index: index,
    number: number
  }
}