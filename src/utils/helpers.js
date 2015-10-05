export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function randomiseDrugList(list, day = 1){
  return list.map( item => {
    let randomQty = randomAlgo(day);
    let randomPrice = randomBetween(item.minPrice, item.maxPrice);

    // set unavailable for the first day
    if(day == -1){
      randomQty = 0;
    }

    return Object.assign({}, item, {
      qty: randomQty,
      currentPrice: randomPrice,
      available: !(randomQty < 1),
      historyPrice: [...item.historyPrice, item.currentPrice],
      historyQty: [...item.historyQty, item.qty]
    });
  });
}

function randomAlgo(day) {
  let base = Math.floor(Math.random() * 4);
  let multiple = Math.floor(Math.random() * 10);
  let maxBase = Math.floor(Math.random() * (base * multiple * day));
  let minBase = Math.floor(Math.random() * (base * multiple));
  return randomBetween(minBase, maxBase);
}

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}