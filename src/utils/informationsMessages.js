import { randomBetween, getLastAvailableIndex } from '../utils/helpers';

export function buildCurrentPlaceMessage(list) {
  let randomIndex = randomBetween(0, list.length);
  let currentItem = list[randomIndex];
  let msg = '';
  let way = '';

  if(currentItem.qty > 0){

    if(currentItem.currentPrice > currentItem.historyPrice[currentItem.historyPrice.length -1]){
      msg = ' will be higher';
      way = 'up';
    }else{
      msg = ' will be lower';
      way = 'down';
    }

    return {
      name: currentItem.name,
      message: msg,
      way: way
    };
  }else{
    return buildCurrentPlaceMessage(list);
  }
}