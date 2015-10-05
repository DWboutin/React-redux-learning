export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function randomiseDrugList(list, day = 0){
  return list.map( item => Object.assign({}, item, {
    qty: randomAlgo(day),
    currentPrice: Math.floor(Math.random() * (item.maxPrice - item.minPrice)) + item.minPrice,
    available: !(day == 0 || item.qty < 1),
    historyPrice: [...item.historyPrice, item.currentPrice],
    historyQty: [...item.historyQty, item.qty]
  }));
}

function randomAlgo(day) {
  let quart = Math.floor(Math.random() * 4);
  let multiple = Math.floor(Math.random() * 10);
  let maxQuart = Math.floor(Math.random() * (quart * multiple * day));
  let minQuart = Math.floor(Math.random() * (quart * multiple));
  return Math.floor(Math.random() * (maxQuart - minQuart)) + minQuart;
}