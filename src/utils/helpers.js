export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function randomiseDrugList(list){
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    item.currentPrice = Math.floor(Math.random() * (item.maxPrice - item.minPrice)) + item.minPrice;
    item.historyPrice.push(item.currentPrice);
  }
  return list;
}