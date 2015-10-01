import { ACTIONS } from '../utils/consts';

export function buyDrug(index, qty) {
  return {
    type: ACTIONS.BUY_DRUG,
    index: index,
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

export function changeListsPrices(day) {
  return {
    type: ACTIONS.CHANGE_LISTS_PRICES,
    day: day
  }
}