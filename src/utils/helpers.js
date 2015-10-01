export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function randomiseDrugList(list, day = 1){
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    let historyQtylength = item.historyQty.length;
    let random10 = Math.round(Math.floor(Math.random() * ((day + 1) * 5)) - (Math.random() * 10));

    item.currentPrice = Math.floor(Math.random() * (item.maxPrice - item.minPrice)) + item.minPrice;
    item.qty = random10;
    item.historyPrice.push(item.currentPrice);
    item.historyQty.push(item.qty);
  }
  return list;
}