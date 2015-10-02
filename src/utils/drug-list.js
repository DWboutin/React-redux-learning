import { randomiseDrugList } from './helpers';

const Pot = "Pot";
const Hash = "Hash";
const Cocaine = "Cocaine";
const Heroin = "Heroin";
const LSD = "LSD";
const Extasy = "Extasy";
const Peyote = "Peyote";
const Mushroom = "Mushroom";
const MDA = "MDA";
const Morphine = "Morphine";
const PCP = "PCP";
const Opium = "Opium";
const Speed = "Speed";

let drugList = [
  {"name": Pot, "qty": 0, "minPrice": 10, "maxPrice": 100, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Hash, "qty": 0, "minPrice": 30, "maxPrice": 200, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Cocaine, "qty": 0, "minPrice": 100, "maxPrice": 1500, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Heroin, "qty": 0, "minPrice": 200, "maxPrice": 4000, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": LSD, "qty": 0, "minPrice": 50, "maxPrice": 6000, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Extasy, "qty": 0, "minPrice": 1, "maxPrice": 400, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Peyote, "qty": 0, "minPrice": 60, "maxPrice": 3450, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Mushroom, "qty": 0, "minPrice": 2, "maxPrice": 120, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": MDA, "qty": 0, "minPrice": 8, "maxPrice": 600, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Morphine, "qty": 0, "minPrice": 120, "maxPrice": 3200, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": PCP, "qty": 0, "minPrice": 35, "maxPrice": 100, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Opium, "qty": 0, "minPrice": 300, "maxPrice": 12000, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false},
  {"name": Speed, "qty": 0, "minPrice": 1, "maxPrice": 80, "currentPrice": 0, "historyPrice": [], "historyQty": [], "available": false}
];

drugList = randomiseDrugList(drugList);
 
export default drugList;