import { ACTIONS } from '../utils/consts';

export function addItem(name, qty, boughtPrice) {
  return {
    type: ACTIONS.ADD_BACKPACK_ITEM,
    name: name,
    qty: qty,
    boughtPrice: boughtPrice
  }
}

export function changeItem(id, name, qty, boughtPrice) {
  return {
    type: ACTIONS.CHANGE_BACKPACK_ITEM,
    index: id,
    name: name,
    qty: qty,
    boughtPrice: boughtPrice
  }
}

export function deleteItem(id) {
  return {
    type: ACTIONS.DELETE_BACKPACK_ITEM,
    index: id
  }
}