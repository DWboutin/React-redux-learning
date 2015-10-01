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
  {"name": Pot, "qty": 10, "minPrice": 10, "maxPrice": 100, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Hash, "qty": 10, "minPrice": 30, "maxPrice": 200, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Cocaine, "qty": 10, "minPrice": 100, "maxPrice": 15000, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Heroin, "qty": 10, "minPrice": 200, "maxPrice": 40000, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": LSD, "qty": 10, "minPrice": 50, "maxPrice": 60000, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Extasy, "qty": 10, "minPrice": 1, "maxPrice": 400, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Peyote, "qty": 10, "minPrice": 60, "maxPrice": 34500, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Mushroom, "qty": 10, "minPrice": 2, "maxPrice": 120, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": MDA, "qty": 10, "minPrice": 8, "maxPrice": 600, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Morphine, "qty": 10, "minPrice": 120, "maxPrice": 12000, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": PCP, "qty": 10, "minPrice": 35, "maxPrice": 100, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Opium, "qty": 10, "minPrice": 300, "maxPrice": 120000, "currentPrice": 0, "historyPrice": [], "historyQty": []},
  {"name": Speed, "qty": 10, "minPrice": 1, "maxPrice": 80, "currentPrice": 0, "historyPrice": [], "historyQty": []}
];

drugList = randomiseDrugList(drugList);

export default drugList;