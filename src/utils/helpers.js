export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function randomiseDrugList(list, day = 0){
  randomAlgo(day);
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    let historyQtylength = item.historyQty.length;
    let random = randomAlgo(day);

    item.currentPrice = Math.floor(Math.random() * (item.maxPrice - item.minPrice)) + item.minPrice;
    item.qty = random;
    item.available = !(day == 0 || item.qty < 1);

    item.historyPrice.push(item.currentPrice);
    item.historyQty.push(item.qty);
  } 
  return list;
}

function randomAlgo(day) {
  let quart = Math.floor(Math.random() * 4);
  let multiple = Math.floor(Math.random() * 10);
  let maxQuart = Math.floor(Math.random() * (quart * multiple * day));
  let minQuart = Math.floor(Math.random() * (quart * multiple));
  return Math.floor(Math.random() * (maxQuart - minQuart)) + minQuart;
}